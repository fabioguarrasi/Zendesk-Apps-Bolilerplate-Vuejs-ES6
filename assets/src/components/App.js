const template = `
<div>
  <h1>{{ $root.state.helloWorld }}</h1>
</div>`;

import ZDClient from '../libs/ZDClient.js';

const App = {
  template,
  created() {
    this.$root.setNewHelloWorld('ciao mondo');
  },
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
