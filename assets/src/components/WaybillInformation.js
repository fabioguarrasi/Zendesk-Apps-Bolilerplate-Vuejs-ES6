export default {
  template: `
    <div class="container-fluid" v-if="wayBillInformation">
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Bill Code:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.billcode}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Freight:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.freight}}
          </span>
        </div>
      </div>
      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Send Site:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.sendsite}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Pay Type:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.paytype}}
          </span>
        </div>
      </div>

      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Send Date:
          </span>
          <span class="c-txt__hint">
          {{wayBillInformation.senddate}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Destination:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.destination}}
          </span>
        </div>
      </div>

      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Weight:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.weight}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Sender:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.sender}}
          </span>
        </div>
      </div>

      <div class="row u-mb-xs">
        <div class="col-md-3">
          <span class="c-txt__hint">
            Piece:
          </span>
          <span class="c-txt__hint">
          {{wayBillInformation.piece}}
          </span>
        </div>
        <div class="col-md-3">
          <span class="c-txt__hint">
            Receiver:
          </span>
          <span class="c-txt__hint">
            {{wayBillInformation.receiver}}
          </span>
        </div>
      </div>
    </div>
  `,
  props: {
    wayBillInformation: {
      type: Object,
      default: {}
    }
  }
}