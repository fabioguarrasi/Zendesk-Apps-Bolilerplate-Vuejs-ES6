import Search from '../components/Search.js';
import OrderInformation from '../components/OrderInformation.js';
import NotFound from '../components/NotFound.js'

export default {
  template: `
    <component :is="selectedComponent"
      @orderInformation="getOrderInformation"
      :orderInformation="orderInformation"
      @component="changeComponent">
    </component>
  `,
  components: {
    Search,
    OrderInformation
  },
  data() {
    return {
      selectedComponent: Search,
      orderInformation: null
    };
  },
  methods: {
    getOrderInformation(orderInformation) {
      this.orderInformation = orderInformation;
      if (!!this.orderInformation && this.orderInformation.responseitems[0].success === 'true') {
        this.selectedComponent = OrderInformation;
      } else {
        this.selectedComponent = NotFound;
      }
    },
    changeComponent(component) {
      this.selectedComponent = component;
    }
  }
};