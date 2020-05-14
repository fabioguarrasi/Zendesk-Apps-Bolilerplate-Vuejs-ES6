import App from './components/App.js';
import zdClient from './libs/ZDClient.js';

const Main = {
  init() {
    zdClient.init();
    zdClient.events['ON_APP_REGISTERED'](this.initVueApp);
  },

  async initVueApp() {
    new Vue({
      el: '#app',
      render: (h) => h(App),
    });
  }
};

export default Main.init();