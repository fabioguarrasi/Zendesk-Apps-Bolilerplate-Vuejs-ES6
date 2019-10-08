import zdClient from "./../../libs/ZDClient.js";
import childTemplate from "./ChildTemplate.js";
import { splitIdentities } from "./../../libs/Helper.js";

const Child = {
  template: childTemplate,
  props: {
    dictionary:Object,
    ticket:Object,
    zd_instance:String
  },
  components: {},
  data() {
    return {};
  },
  created() {
    const { dictionary, ticket } = this;
    if (ticket.has_requester) {
      let identities = ticket.data.requester.identities;
      let splittedIdentities = splitIdentities(identities);
      // TODO: Auto search by identities
    } else {
      zdClient.invoke.notify(dictionary.messages.no_ticket_requester);
    }
  },
  mounted() {},
  updated() {},
  computed: {},
  methods: {
    openModal() {
      const { client } = zdClient.app;
      zdClient.invoke.instancesCreate(this.$options.propsData);
      client.on("modalEdited", this.editModal);
    },
    async editModal(args) {
      const { client } = zdClient.app;
      const triggerAttached = await client.has("modalEdited", this.editModal);
      triggerAttached && client.off("modalEdited", this.editModal);
    }
  }

  /* ------------------------------------------------------------------------ */
};

export default Child;
