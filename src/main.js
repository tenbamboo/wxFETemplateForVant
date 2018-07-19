import Vue from 'vue'
import App from './App'
import resource from './resource'
import store from './store'
import router from './router'

import '@static/css/normalize.css'
import '@static/css/common.css'

import _ from '@/components/common/localLodash.js'
import CainUICommon from '@/components/cain/CainUICommon'

import { Button, Icon } from 'vant'
Vue.use(Button)
Vue.use(Icon)

Vue.prototype.$_ = _

resource.init()

Vue.use(CainUICommon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
