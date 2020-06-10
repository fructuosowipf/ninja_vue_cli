<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import header from './components/header';
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';

export default {
  components: {
    'app-header': header,
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
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