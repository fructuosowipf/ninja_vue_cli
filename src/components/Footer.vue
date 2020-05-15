<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
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
    return {
      copyright: "© 2020, Rubén Fructuoso, "
    };
  },
  created(){
      eventBus.$on('titleChanged', (data) => {
          this.title = data;
      });
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
