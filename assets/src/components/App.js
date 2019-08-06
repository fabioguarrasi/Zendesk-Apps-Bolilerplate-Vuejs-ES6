const template = `
<div>
  <h1>{{ helloWorld }}</h1>
</div>`;

import zdClient from '../libs/ZDClient.js';

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
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    zdClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
