const template = `
<div>
  <h1>{{ helloWorld }}</h1>
</div>`;

import ZDClient from '../libs/ZDClient.js';

const App = {
  template,
  data() {
    return {
      fieldValue: '',
    };
  },
  computed: {
    ...Vuex.mapState(['helloWorld']),
  },
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
