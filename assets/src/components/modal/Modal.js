import zdClient from "./../../libs/ZDClient.js";
import modalTemplate from "./ModalTemplate.js";

const Modal = {
  template: modalTemplate,
  props: {
    app_state:Object
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  updated() {},
  computed: {},
  methods: {
    async updateData() {
      const { client: modalClient } = zdClient.app;
      let appLocation = this.app_state.zd_instance;
      let appClientInstances = await zdClient.getData("instances");
      let [appClientGuid] = Object.keys(appClientInstances).filter(
        guid => appClientInstances[guid].location === appLocation
      );
      let appClient = modalClient.instance(appClientGuid);
      let data = {
        test: "tis is test arg"
      };
      appClient.trigger("modalEdited", data);
      modalClient.invoke("destroy");
    }
  }

  /* ------------------------------------------------------------------------ */
};

export default Modal;
