import zdClient from "./../libs/ZDClient.js";
import dictionary from "./../i18n/dictionary.js";
import appTemplate from "./AppTemplate.js";
import Child from "./child/Child.js";

const App = {
  template: appTemplate,
  components: {
    Child
  },
  data() {
    return {
      state: {
        is_loading: true,
        zd_instance: "",
        ticket: {},
        dictionary: {}
      }
    };
  },
  created() {
    const { currentUser, context,client } = zdClient.app;
    console.log(client)
    let locale = currentUser.locale.replace(/-.+$/, "");
    this.state.dictionary = dictionary[locale];
    this.state.zd_instance = context.location;
    console.log(this.state.zd_instance)
    this.initApp();
  },

  mounted() {},

  updated() {},

  computed: {
    ...Vuex.mapState(["message_from_vuex_state"]),
    ...Vuex.mapState(["hardcoded_value"])
  },

  methods: {
    async initApp() {
      this.state.ticket = await zdClient.getData("ticket");
      // this.state.customFields = await zdClient.getData([
      //   "ticket",
      //   "ticket.tags"
      // ]);
      this.state.is_loading = false;
    }
  }
};

export default App;
