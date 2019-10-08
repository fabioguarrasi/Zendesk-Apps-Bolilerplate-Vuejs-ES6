const client = ZAFClient.init();

const ZDClient = {
  events: {
    appRegistered: function(initVueFun) {
      return client.on("app.registered", async ({ context, metadata }) => {
        const { currentUser } = await client.get("currentUser");
        ZDClient.app = {
          client,
          context,
          metadata,
          settings: metadata.settings,
          currentUser
        };
        return initVueFun();
      });
    },
    appActivated: function() {
      return client.on("app.activated", () => {
        console.log("app is activated again");
      });
    }
  },
  invoke: {
    notify: function(message, type = "error") {
      return client.invoke("notify", message, type);
    },
    instancesCreate: function(appState) {
      console.log(appState)
      client
        .invoke("instances.create", {
          location: "modal",
          url: `assets/modal.html#parent_guid=${client._instanceGuid}`,
          size: {
            width: "350px",
            height: "300px"
          }
        })
        .then(({ "instances.create": [instancesCreate] }) => {
          const modalClient = client.instance(instancesCreate.instanceGuid);
          ZDClient.app.modalClient = modalClient;
          modalClient.on("modalReady", () => {
            modalClient.trigger("drawData", appState);
          });
        });
    }
  },
  getData: async function(getDataInfo, force = false) {
    if (ZDClient.app[getDataInfo] && force) {
      return ZDClient.app[getDataInfo];
    } else {
      try {
        ZDClient.app[getDataInfo] = (await client.get(getDataInfo))[
          getDataInfo
        ];
        return ZDClient.app[getDataInfo];
      } catch (err) {
        console.error(err);
      }
    }
  },

  app: {},
  resizeFrame(appHeight) {
    client.invoke("resize", { width: "100%", height: `${appHeight}px` });
  }
};

export default ZDClient;
