import dictionary from './dictionary.js';
import { getObjProperty } from '../libs/Helper.js';
const i18n = {
  install(Vue, options = {}) {
    const t =
      options && options.locale
        ? dictionary[options.locale.split('-')[0]] || dictionary['en']
        : dictionary['en'];
    const RTL_LOCALES = ['ar', 'he'];

    Vue.prototype.$t = key => getObjProperty(t, key) || '';
    Vue.prototype.$rtl = () => {
      return RTL_LOCALES.indexOf(options.locale.toLowerCase()) > -1
        ? 'rtl'
        : 'ltr';
    };
  }
};
export default i18n;
