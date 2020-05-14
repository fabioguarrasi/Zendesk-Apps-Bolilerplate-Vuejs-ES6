import zdClient from '../libs/ZDClient.js';

export default {
  template: `
    <div class="container-wrapper">
      <div class="row u-mt u-mb u-ml-xxs">
        <div class="col-md-12">
          <button class="c-btn c-btn--primary c-btn--custom c-btn--sm"
            @click="$emit('component', 'Search')">
            Back
          </button>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 u-ta-center">
            <img src="warning.svg"/>
            <span>
              <label class="c-txt__label">
                No Order Information Found.
              </label>
            </span>
        </div>
      </div>
    </div>
  `,
  mounted() {
    zdClient.resizeFrame(this.$el.scrollHeight + 50);
  },
}