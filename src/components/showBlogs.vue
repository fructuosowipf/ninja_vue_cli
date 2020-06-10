<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="article in articles" v-bind:key="article" class="single-blog">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        articles: []
    };
  },
  methods: {
      
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts',).then(
          data => {
              console.log(data);
              this.articles = data.body.slice(0,10);
          }
      )
  }
};
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-block {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>