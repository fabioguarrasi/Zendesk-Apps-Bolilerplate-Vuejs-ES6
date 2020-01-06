import i18n from '../i18n/index.js';

Vue.use(Vuex);
Vue.use(i18n);

window.nls = new Vue();

export default new Vuex.Store({
  state: {},
  getters: {},
  modules: {},
  actions: {},
});