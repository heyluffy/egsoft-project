// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import emitter from './components/egmentui/script/emitter'
import EgMentUI from './components/egmentui'
import './common/css/common.css'
import './common/css/icon.css'
import './common/css/eaglesoft.css'
import './common/css/animate.css'
import './components/egmentui/css/radio.css'
import './components/egmentui/css/input.css'
import './components/egmentui/css/button.css'
import './components/egmentui/css/checkbox.css'
import './components/egmentui/css/dialog.css'

Vue.config.productionTip = false;
Vue.use(EgMentUI);

Vue.prototype.$emitter = emitter;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
