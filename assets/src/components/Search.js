import zdClient from '../libs/ZDClient.js';

export default {
  template: `
    <div class="container search-container">
      <PulseLoader v-if="isSearching"
        class="u-mt-lg"
        color="#ff0000">
      </PulseLoader>
      <div class="row u-mt-lg" v-else>
        <div class="col-md-12">
          <div class="u-ta-center">
            <div class="fake-input">
              <input type="text" 
                class="c-txt__input" 
                @keyup.enter="search" 
                placeholder="Waybill Bill Code" 
                type="text" 
                v-model="searchString"/>
              <img src="search.svg"
                @click="search"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  `,
  components: {
    PulseLoader: VueSpinner.PulseLoader,
  },
  data() {
    return {
      searchString: '',
      key: 'f893f630dd66eec1396043c747162a1a',
      isSearching: false
    }
  },
  methods: {
    async search() {
      this.isSearching = true;
      var formData = new FormData();
      const logisticInterface = JSON.stringify({
        billcode: this.searchString,
        lang: 'en'
      });
      let hashedValue = logisticInterface + this.key;
      hashedValue = btoa(md5(hashedValue));
      formData.append('eccompanyid', 'ZEN-V0001');
      formData.append('logistics_interface', logisticInterface);
      formData.append('data_digest', hashedValue);
      formData.append('msg_type', 'CSTRACK');
      const orderInformation = await zdClient.getOrderInformation(formData);
      this.$emit('orderInformation', orderInformation);
    }
  },
  mounted() {
    zdClient.resizeFrame(this.$el.scrollHeight + 100);
  },
};