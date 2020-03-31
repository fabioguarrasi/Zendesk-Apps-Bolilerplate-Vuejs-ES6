import App from './components/App.js';
import ZDClient from './services/ZDClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const initVueApp = (data) => {
    new Vue({
      el: '#app',
      render: h => h(App),
    });
  };

  ZDClient.init();
  ZDClient.events['ON_APP_REGISTERED'](initVueApp);
});