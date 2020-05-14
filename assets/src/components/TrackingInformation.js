import zdClient from '../libs/ZDClient.js';

export default {
  template: `
    <div class="container-fluid cstm-border" v-if="trackingInformation">
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Scan Date:
          </span>
          <span class="c-txt__hint">
            {{trackingInformation.scandate}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Operation Date:
          </span>
          <span class="c-txt__hint">
            {{trackingInformation.operdate}}
          </span>
        </div>
      </div>
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Upload Date
          </span>
          <span class="c-txt__hint">
            {{trackingInformation.uploaddate}}
          </span>
        </div>
      </div>

      <div class="row u-mb-xs">
        <div class="col-md-6">
          <span class="c-txt__hint">
            Scan Des:
          </span>
          <span class="c-txt__hint">
            {{trackingInformation.scandes}}
          </span>
        </div>
      </div>
    </div>
  `,
  props: {
    trackingInformation: {
      type: Object,
      default: {}
    }
  },
}