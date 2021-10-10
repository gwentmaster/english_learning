// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Cell, DropdownItem, DropdownMenu, List, NoticeBar } from 'vant'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(List)
Vue.use(NoticeBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
