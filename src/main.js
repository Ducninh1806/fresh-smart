// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VeeValidate from 'vee-validate'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'
import { initialize } from "./service/general";

Vue.config.productionTip = false
initialize(store, router);

Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
