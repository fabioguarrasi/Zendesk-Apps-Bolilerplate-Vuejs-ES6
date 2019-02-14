const ZDClient = {
  CLIENT: ZAFClient.init(),

  /**
   * It sets the frame height using on the passed value.
   * If no value has been passed, 80 will be set as default heigth.
   * @param {Int} newHeight
   */
  resizeFrame(appHeight) {
    this.CLIENT.invoke('resize', {width: '100%', height: appHeight +'px'});
  },
};

export default ZDClient;
