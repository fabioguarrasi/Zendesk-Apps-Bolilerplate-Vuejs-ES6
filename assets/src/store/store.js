Vue.use(Vuex);
import state from './state.js';
import getters from './getters.js';
import modules from './modules.js';
import actions from './actions.js';

export default new Vuex.Store({
  state,
  getters,
  modules,
  actions,
});