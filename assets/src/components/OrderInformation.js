import zdClient from '../libs/ZDClient.js';
import ChevronIcon from '../components/ChevronIcon.js';
import WaybillInformation from '../components/WaybillInformation.js';
import TrackingInformation from '../components/TrackingInformation.js';
import ProblemInformation from '../components/ProblemInformation.js';

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
      <div class="row">
        <div class="col-md-12">
          <button class="u-delta u-semibold collapsible collapsible-main active"
            @click="collapse(event, 'isShowWayBill')">
            Waybill Information
            <ChevronIcon 
              :class="{'zd-transition-unfold': isShowWayBill, 'zd-transition-fold': !isShowWayBill}">
            </ChevronIcon>
          </button>
          <div class="content" v-if="isShowWayBill">
            <WaybillInformation 
              :wayBillInformation="orderInformation.responseitems[0].wayBill">
            </WaybillInformation>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="u-delta u-semibold collapsible collapsible-main active"
            @click="collapse(event, 'isShowTracking')">
            Tracking Information
            <ChevronIcon 
              :class="{'zd-transition-unfold': isShowTracking, 'zd-transition-fold': !isShowTracking}">
            </ChevronIcon>
          </button>
          <div class="content" v-if="isShowTracking">
            <TrackingInformation
              v-for="trackingInformation in orderInformation.responseitems[0].trackInfos"
              :trackingInformation="trackingInformation">
            </TrackingInformation>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="u-delta u-semibold collapsible collapsible-main active"
            @click="collapse(event, 'isShowProblem')">
            Problem Information
            <ChevronIcon
              :class="{'zd-transition-unfold': isShowProblem, 'zd-transition-fold': !isShowProblem}">
            </ChevronIcon>
          </button>
          <div class="content" v-if="isShowProblem">
            <ProblemInformation
              v-for="problemInformation in orderInformation.responseitems[0].problemInfo"
              :problemInformation="problemInformation">
            </ProblemInformation>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      isShowWayBill: true,
      isShowTracking: true,
      isShowProblem: true
    }
  },
  props: {
    orderInformation: {
      type: Object,
      default: {}
    }
  },
  components: {
    ChevronIcon,
    WaybillInformation,
    TrackingInformation,
    ProblemInformation,
  },
  computed: {
   
  },
  methods: {
    collapse(event, property) {
      event.target.classList.toggle('active');
      this[property] = !this[property];
    },
  },
  mounted() {
    zdClient.resizeFrame(this.$el.scrollHeight + 20);
  },
  updated() {
    zdClient.resizeFrame(this.$el.scrollHeight + 20);
  }
};