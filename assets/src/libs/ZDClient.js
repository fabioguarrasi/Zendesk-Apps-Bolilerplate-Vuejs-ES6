const client = ZAFClient.init();

const ZDClient = {
  app: {},
  events: {
    appRegistered: function(initVueFun) {
      return client.on('app.registered', async ({ context, metadata }) => {
        const { currentUser } = await client.get('currentUser');
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
      return client.on('app.activated', () => {
        console.log('app is activated again');
      });
    }
  },
  invoke: {
    notify: function(message, type = 'error') {
      return client.invoke('notify', message, type);
    },
    instancesCreate: function(appState) {
      client
        .invoke('instances.create', {
          location: 'modal',
          url: `assets/modal.html#parent_guid=${client._instanceGuid}`,
          size: {
            width: '350px',
            height: '300px'
          }
        })
        .then(({ 'instances.create': [instancesCreate] }) => {
          const modalClient = client.instance(instancesCreate.instanceGuid);
          ZDClient.app.modalClient = modalClient;
          modalClient.on('modalReady', () => {
            modalClient.trigger('drawData', appState);
          });
        });
    },
    resizeFrame(appHeight) {
      client.invoke('resize', { width: '100%', height: `${appHeight}px` });
    }
  },
  async removeTrigger(trigger, attachedFunc) {
    const { client } = ZDClient.app;
    const triggerAttached = await client.has(trigger, attachedFunc);
    triggerAttached && client.off(trigger, attachedFunc);
  }
};

export default ZDClient;
