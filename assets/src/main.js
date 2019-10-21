import App from './components/App.js';
import zdClient from './libs/ZDClient.js';
import i18n from './i18n/i18n.js';
import store from './store/store.js';

const Main = {
  async init() {
    zdClient.events.appRegistered(await this.initVueApp);
  },
  initVueApp() {
    const { currentUser } = zdClient.app;
    Vue.use(i18n, currentUser);
    new Vue({
      el: '#app',
      store,
      render: h => h(App)
    });
  }
};

export default Main.init();
