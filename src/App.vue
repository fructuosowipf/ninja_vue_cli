<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// START Register component Ninja locally:
import Ninjas from './Ninjas.vue';
// END Register component Ninja locally:

export default {
  // START Register component Ninja locally:
  components: {
    'ninjas': Ninjas
    },
  // END Register component Ninja locally:
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style scoped>
h1 {
  color: palegreen;
}

</style>
