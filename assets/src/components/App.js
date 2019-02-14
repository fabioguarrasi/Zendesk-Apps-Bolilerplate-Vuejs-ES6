import zdClient from '../libs/ZDClient.js';

const App = {
  template: `
    <h1>{{helloWorld}}</h1>
  `,
  computed: {
    ...Vuex.mapState([
      'helloWorld',
    ]),
  },
  mounted() {
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;