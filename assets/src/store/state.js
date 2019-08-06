import i18n from '../i18n/index.js';

Vue.use(i18n);
window.nls = new Vue();

const state = {
  helloWorld: nls.$t('helloWorld'),
};

export default state;