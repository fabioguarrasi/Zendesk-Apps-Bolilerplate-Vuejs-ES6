import App from './components/App.js';
import store from './store/store.js';
import ZDClient from './libs/ZDClient.js';
import i18n from './i18n/index.js';

const Main = {
  init() {
    ZDClient.init();
    ZDClient.events['ON_APP_REGISTERED'](this.initVueApp);
  },

  initVueApp() {
    Vue.use(i18n);
    new Vue({
      el: '#app',
      data: store,
      render: h => h(App),
    });
  },
};

export default Main.init();
