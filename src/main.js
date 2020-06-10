import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

//Vue.use(VueAxios, axios);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})