import InputField from './InputField.js';
import zdClient from '../libs/ZDClient.js';

const App = {
  template: `
    <div>
      <h1>{{ $t('helloWorld') }}</h1>
      <InputField v-for="inputField in inputFields" v-bind="inputField">
      </InputField>
    </div>
  `,
  data() {
    return {
      fieldValue: '',
    };
  },
  components: {
    InputField,
  },
  computed: {
    ...Vuex.mapState([
      'inputFields',
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