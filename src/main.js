import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
Vue.prototype.$api = api
//挂载在原型对象上(所有vue都可以访问)
import './assets/css/Duanyao.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VCharts from 'v-charts'
Vue.use(VCharts)

// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//     debug: true,
//     // 服务器端地址
//     connection: 'http://localhost:3000',
//     vuex: {
//     }
// }))

Vue.config.productionTip = false

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 