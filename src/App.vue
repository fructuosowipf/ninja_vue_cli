<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs' : showBlogs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
}
</style>