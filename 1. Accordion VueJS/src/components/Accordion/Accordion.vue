<template>
  <ul>
    <Tab
      v-for="(item,index) in items"
      :item="item"
      :key="index"
    ></Tab>
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
  },
  components: {
    Tab,
  },
};
</script>

<style lang="scss">

</style>
