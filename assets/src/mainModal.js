import zdClient from './libs/ZDClient.js';
import i18n from './i18n/i18n.js';
import Modal from './components/Modal/Modal.js';

const MainModal = {
  init() {
    zdClient.events.appRegistered(this.initVueApp);
  },

  initVueApp() {
    zdClient.app.client.trigger('modalReady');
    zdClient.app.client.on('drawData', state => {
      const { currentUser } = zdClient.app;
      Vue.use(i18n, currentUser);

      new Vue({
        el: '#modalContainer',
        render: h =>
          h(Modal, {
            props: {
              app_state: state
            }
          })
      });
    });
  }
};

export default MainModal.init();
