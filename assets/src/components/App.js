const template = `
<div>
  <h1>{{ i18n.helloWorld }}</h1>
  <p>{{ state.customText }}</p>
</div>`;

import ZDClient from '../services/ZDClient.js';
import { state, getters } from '../store/store.js';

const App = {
  template,
  computed: {
    state: () => state,
    ...getters
  },
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
