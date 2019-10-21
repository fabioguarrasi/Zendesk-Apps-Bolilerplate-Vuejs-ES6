import zdClient from '../../libs/ZDClient.js';
import childTemplate from './ChildTemplate.js';

const Child = {
  template: childTemplate,
  props: {
    state: Object
  },
  created() {
    console.log('child component loaded');
  },
  methods: {
    openModal() {
      const { client } = zdClient.app;
      zdClient.invoke.instancesCreate(this.state);
      client.on('modalEdited', this.editModal);
    },
    async editModal(data) {
      console.log(data);
      zdClient.removeTrigger('modalEdited', this.editModal);
    }
  }
};

export default Child;
