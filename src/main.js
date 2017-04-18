// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/common.css'
import './common/css/icon.css'
import './common/css/eaglesoft.css'
import './common/css/animate.css'
import './components/eaglesoft/css/radio.css'
import './components/eaglesoft/css/input.css'
import './components/eaglesoft/css/button.css'
import './components/eaglesoft/css/checkbox.css'
import './components/eaglesoft/css/dialog.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
