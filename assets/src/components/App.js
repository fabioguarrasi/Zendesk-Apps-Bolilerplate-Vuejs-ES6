const template = `
<div>
  <h1>{{ $t('helloWorld') }}</h1>
</div>`;

import ZDClient from '../libs/ZDClient.js';

const App = {
  template,
  mounted() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
  updated() {
    ZDClient.resizeFrame(this.$el.scrollHeight);
  },
};

export default App;
