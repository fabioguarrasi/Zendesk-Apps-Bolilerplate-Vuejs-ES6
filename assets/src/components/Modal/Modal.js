import zdClient from '../../libs/ZDClient.js';
import modalTemplate from './ModalTemplate.js';

const Modal = {
  template: modalTemplate,
  props: {
    app_state: Object
  },
  methods: {
    async updateData() {
      const { client: modalClient } = zdClient.app;
      const appClient = modalClient.instance(this.app_state.zdInstance);
      const data = {
        test: 'This is test data'
      };
      appClient.trigger('modalEdited', data);
      modalClient.invoke('destroy');
    }
  }
};

export default Modal;
