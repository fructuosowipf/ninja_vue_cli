<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search for Articles" />
    <div v-for="article in filteredArticles" v-bind:key="article" class="single-blog">
        <router-link v-bind:to="'/blog/'+ article.id"><h2 v-regenbogen>{{ article.title | to-uppercase }}</h2></router-link>
        <p>{{ article.content | snippet }}</p>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {  
  components: {},
  data() {
    return {
        articles: [],
        search: ''
    };
  },
  methods: {
      
  },
  created(){
      this.$http.get('https://ninja-vue-fw.firebaseio.com/posts.json',).then(
          data => {
              return data.json();
          }).then(data => {
            var blogsArray = []
            for (let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
            }
            this.articles = blogsArray;
          })
  },
  computed: {
    
    }
  ,
  filters : {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'regenbogen': {
      bind(el,binding,vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>