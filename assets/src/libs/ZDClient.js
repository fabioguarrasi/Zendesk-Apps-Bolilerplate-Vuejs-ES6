

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
    get settings() { return APP_SETTINGS; },
    get client() { return CLIENT; }
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
    const maxAppHeight = appHeight > 500 ? 500 : appHeight;
    CLIENT.invoke('resize', {width: '100%', height: `${maxAppHeight}px`});
  },
};

export default ZDClient;
