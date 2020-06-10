<template>
  <div id="single-blog">
      <h1>{{ article.title }}</h1>
      <article>{{ article.body }}</article>
      <p>Id: {{ article.id }}</p>
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(
            (data) => {
                console.log(data);
                this.article = data.body;
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