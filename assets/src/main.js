import App from './components/App.js';
import ZDClient from './services/ZDClient.js';
import { methods } from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const initVueApp = (data) => {
    new Vue({
      el: '#app',
      render: h => h(App),
      beforeCreate() {
        if(data.dc) {
          methods.setNewStringMapping(data.dc);
        }
      }
    });
  };

  ZDClient.init();
  ZDClient.events['ON_APP_REGISTERED'](initVueApp);
});