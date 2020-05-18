<template>
  <header>
    <h1 @click="changeTitleHeader">{{ title }}</h1>
  </header>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
      changeTitleHeader(){
          //this.$emit('changeTitle', "Tiago's Vue");
          this.title = "Tiago's Vue";
          eventBus.$emit('titleChangedEmitFromHeader', "Tiago's Vue");
      }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
