// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Card, Cell, DropdownItem, DropdownMenu, List, Progress } from 'vant'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Card)
Vue.use(Cell)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(List)
Vue.use(Progress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
