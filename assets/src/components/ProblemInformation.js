export default {
  template: `
    <div class="container-fluid cstm-border" v-if="problemInformation">
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Date:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proDate}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Type:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proType}}
          </span>
        </div>
      </div>
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Site:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proSite}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Statue:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proStatus}}
          </span>
        </div>
      </div>
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem JJ Site:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proJJSite}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Info:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proInfo}}
          </span>
        </div>
      </div>

      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Problem Man:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proMan}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Type:
          </span>
          <span class="c-txt__hint">
            {{problemInformation.proType}}
          </span>
        </div>
      </div>
    </div>
  `,
  props: {
    problemInformation: {
      type: Object,
      default: {}
    }
  }
}