const template = `
<div>
  <h1>{{ state.i18n.helloWorld }}</h1>
  <p>{{ state.customText }}</p>
</div>`;

import ZDClient from '../services/ZDClient.js';
import { state } from '../store/store.js';

const App = {
  template,
  computed: {
    state: () => state
  },
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
