// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Card, Cell, Checkbox, CheckboxGroup, Col, DropdownItem, DropdownMenu, List, Progress, Row } from 'vant'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Card)
Vue.use(Cell)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Col)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(List)
Vue.use(Progress)
Vue.use(Row)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
