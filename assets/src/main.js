import zdEvents from './libs/ZDEvents.js';
import store from './store/store.js';
import App from './components/App.js';

const Main = {

  vm: null,

  init() {
    zdEvents['ON_APP_REGISTERED'](this.initVueApp);
  },

  initVueApp: (data) => {
    new Vue({
      el: '#app',
      store,
      render(h) {
        return h(App);
      },
    });
  }
};

export default Main.init();