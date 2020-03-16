import i18n from '../i18n/index.js';

Vue.use(i18n);

window.nls = new Vue();

const store = {
  state: {
    helloWorld: 'Hello World!'
  },
  setNewHelloWorld(newMessage) {
    this.state.helloWorld = newMessage;
  }
};

export default store;