define([
  'text!./template.html',
  'Vue',
  'libs/ZAFClient'
],function(
  template,
  Vue,
  zaf
) {
  'use strict';

  return Vue.component('zd-app', {
    template,
    computed: {
      helloWorld() {
        return this.$store.state['helloWorld'];
      }
    },
    mounted() {
      zaf.resizeFrame(this.$el.scrollHeight);
    },
    updated() {
      zaf.resizeFrame(this.$el.scrollHeight);
    }
  });
});