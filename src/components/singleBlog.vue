<template>
  <div id="single-blog">
      <h1>{{ article.title }}</h1>
      <article>{{ article.content }}</article>
      <p>Author: {{ article.author }}</p>
      <p>Categories:</p>
      <ul>
          <li v-for="category in article.categories" v-bind:key="category">{{category }}</li>
      </ul>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            article: {}
        }
    },
    created() {
        this.$http.get('https://ninja-vue-fw.firebaseio.com/posts/' + this.id + '.json').then(
            (data) => {
                console.log(data);
                return data.json();
            }
        ).then(
            (data) => {
                this.article = data;
            }
        );
    }
};
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    padding: 20px;
}
</style>