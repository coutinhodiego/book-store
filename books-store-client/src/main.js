import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'


import 'material-design-icons/iconfont/material-icons.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    this.axios.get('http://localhost:3000/produtos')
      .then(response => {
        let data = response.data
        this.$store.commit('setLoadedBooks', data)
      })
      .catch(erro => console.log(erro))
  }
})
