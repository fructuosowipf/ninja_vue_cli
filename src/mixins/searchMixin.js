export default {
    computed: {
        filteredArticles() {
            return this.articles.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}