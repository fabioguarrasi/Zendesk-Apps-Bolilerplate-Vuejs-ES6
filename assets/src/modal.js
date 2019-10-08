import zdClient from "./../src/libs/ZDClient.js";
import i18n from "./../src/i18n/index.js";
import modal from "./../src/components/modal/Modal.js";

const Main = {
  init() {
    zdClient.events.appRegistered(this.initVueApp);
  },

  initVueApp() {
    console.log(zdClient.app);
    // console.log(JSON.stringify(zdClient.app));
    zdClient.app.client.trigger("modalReady");
    zdClient.app.client.on("drawData", state => {
      Vue.use(i18n);

      new Vue({
        el: "#modalContainer",
        render: h =>
          h(modal, {
            props: {
              app_state:state
            }
          })
      });
    });
  }

  /* ------------------------------------------------------------------------ */
};

export default Main.init();
