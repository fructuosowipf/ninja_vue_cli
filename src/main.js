import Vue from 'vue'
import App from './App.vue'

// START Register component Ninja globally:

import Ninjas from "./Ninjas.vue"

// Vue.component('ninjas', Ninjas)

// END Register component Ninja globally:


new Vue({
  el: '#app',
  render: h => h(App)
})
