

let CLIENT = null;
let APP_SETTINGS = null;
let self = null;

const ZDClient = {

  events: {
    ON_APP_REGISTERED(cb) {
      return CLIENT.on('app.registered', async (data) => {
        APP_SETTINGS = data.metadata.settings;
        if(APP_SETTINGS.dcAppReference) {
          try {
            const dc = await self.getAppStringsFromDynamicContent();
            data.dc = dc;
          } catch(error) {
            console.error('Unable to retrieve strings from DC', error);
          }
        }
        return cb(data);
      });
    },
  },

  init() {
    self = this;
    CLIENT = ZAFClient.init();
  },

  /**
   * Set getters for privite objects
   */
  app: {
    get settings() { return APP_SETTINGS; }
  },

  /**
   * It retrieves the current locale object
   * @returns {Promise(Object)}
   */
  async getCurrentLocale() {
    try {
      return (await CLIENT.request('/api/v2/locales/current.json')).locale;
    } catch(error) {
      return null;
    }
  },

  /**
   * It get all the dynamic content and filters them by the current locale and dcAppReference specified
   * by the user.
   * @param {String} url If pagination, url will contain next_page url
   * @param {Array} prevItems If pagination, prevItems will contain the array retrieved in te previous page
   * @returns {Promise(Array<String>)}
   */
  async getAppStringsFromDynamicContent(url, prevItems) {
    const currentLocale = await this.getCurrentLocale();
    const stringsMapping = prevItems ? [...prevItems] : [];
    let response = null;
    try {
      response = await CLIENT.request(url || '/api/v2/dynamic_content/items.json');
    } catch(error) {
      return null;
    }
    if(response.next_page){
      this.getAppStringsFromDynamicContent(response.next_page, stringsMapping);
    } else {
      response.items.forEach(item => {
        if(item.name.indexOf(APP_SETTINGS.dcAppReference) === 0) {
          let string = item.variants.find(variant => variant.locale_id === currentLocale.id);
          if(string) {
            stringsMapping.push({
              name: item.name.replace(APP_SETTINGS.dcAppReference, ''),
              value: string.content
            });
          }
        }
      });
      return stringsMapping;
    }
  },

  /**
   * It returns true if the app is installed in the instance, false if
   * it's running locally
   */
  isProduction() {
    return !!this.app.settings['IS_PRODUCTION'];
  },

  /**
   * It sets the frame height using on the passed value.
   * If no value has been passed, 80 will be set as default heigth.
   * @param {Int} newHeight
   */
  resizeFrame(appHeight) {
    CLIENT.invoke('resize', {width: '100%', height: `${appHeight}px`});
  },
};

export default ZDClient;
