import zdClient from './../libs/ZDClient.js';
import appTemplate from './AppTemplate.js';
import Child from './Child/Child.js';

const App = {
  template: appTemplate,
  components: {
    Child
  },
  data() {
    return {
      state: {}
    };
  },
  created() {
    this.state.zdInstance = zdClient.app.client._instanceGuid;
    this.initApp();
  },
  computed: {
    ...Vuex.mapState(['message_from_vuex_state']),
    ...Vuex.mapState(['hardcoded_value'])
  },
  mouted() {
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
  methods: {
    async initApp() {
      console.log('parent component created');
    }
  }
};

export default App;
