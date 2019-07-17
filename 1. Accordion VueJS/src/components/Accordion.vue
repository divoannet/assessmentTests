<template>
  <ul class="vue-accordion">
    <Tab/>
  </ul>
</template>

<script>
import Tab from './Tab.vue';

export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
    },
    components: {
      Tab,
    },
  },
};
</script>

<style scoped lang="scss">

</style>
