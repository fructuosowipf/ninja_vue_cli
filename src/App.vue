<template>
  <div>
    <button @click="component = 'form-one'">Show Form One</button>
    <button @click="component = 'form-two'">Show Form Two</button>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
// Imports
import formOne from "./components/formOne";
import formTwo from "./components/formTwo";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: false
    };
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
}
</style>