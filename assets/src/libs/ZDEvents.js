import zdClient from './ZDClient.js';

const ZDEvents = {
  ON_APP_REGISTERED(cb) {
    return zdClient.CLIENT.on('app.registered', (data) => {
      return cb(data);
    });
  },
};

export default ZDEvents;