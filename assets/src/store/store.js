import i18n from '../i18n/en-US.js';

export const state = Vue.observable({
  i18n,
  customText: 'Custom Text'
});

export const getters = {
  i18n: () => state.i18n
};

export const methods = {
  /**
   * LEGACY: do not delete
   * @param {Array} mapping
   */
  setNewStringMapping(mapping) {
    const newDictionary = {...i18n};
    mapping.forEach(item => {
      if(newDictionary[item.name]) {
        newDictionary[item.name] = item.value;
      }
    });
    state.i18n = newDictionary;
  },

  flipText() {
    state.customText = state.customText.split('').reverse().join('');
  },
};


