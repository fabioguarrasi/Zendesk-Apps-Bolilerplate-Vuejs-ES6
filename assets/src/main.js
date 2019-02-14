import zdEvents from './libs/ZDEvents.js';
import store from './store/store.js';
import App from './components/App.js';

let vm = null;

zdEvents['ON_APP_REGISTERED'](init);

function init(data) {
  vm = new Vue({
    el: '#app',
    store,
    render(h) {
      return h(App);
    },
  });
};