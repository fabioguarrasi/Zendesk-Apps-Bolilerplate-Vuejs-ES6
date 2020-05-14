let CLIENT;
let APP_SETTINGS = null;

const ZDClient = {

  events: {
    ON_APP_REGISTERED(cb) {
      return CLIENT.on('app.registered', (data) => {
        APP_SETTINGS = data.metadata.settings;
        return cb(data);
      });
    },
  },

  init() {
    CLIENT = ZAFClient.init();
  },

  /**
   * Set getters for privite objects
   */
  app: {
    get settings() { return APP_SETTINGS; }
  },

  async getOrderInformation(formData) {
    try {
      const request = new XMLHttpRequest();
      request.open('POST', this.app.settings.apiURL, false);
      request.send(formData);
      return JSON.parse(request.response);
    } catch (error) {
      console.error('getOrderInformation error', error);
      return null;
    }
  },

  /**
   * It sets the frame height using on the passed value.
   * If no value has been passed, 80 will be set as default heigth.
   * @param {Int} newHeight
   */
  resizeFrame(appHeight) {
    CLIENT.invoke('resize', {width: '600px', height: `${appHeight}px`});
  },
};

export default ZDClient;
