import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

//Vue.use(VueAxios, axios);
Vue.use(VueResource);

// Custom directives, added as attributes in showBlogs.vue:


Vue.directive('theme', {
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if(binding.arg == "column"){
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

// custom Filters, added after the Pipe (|) in showBlogs.vue


Vue.filter('snippet', value => {
  return value.slice(0,100) + "...";
});

new Vue({
  el: '#app',
  render: h => h(App)
})