<template>
  <ul class="accordion">
    <Tab
      v-for="(item,index) in items"
      :item="item"
      :key="item.id"
      :title="item.title"
      :content="item.content"
      :active="item.id === activeTab"
      :loading="loading"
      @on-click-handler="onClickHandler"
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
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  data: () => ({
    activeTab: null,
    loading: false,
  }),
  components: {
    Tab,
  },
  methods: {
    onClickHandler(item) {
      if ( this.activeTab === item.id ) {
        this.activeTab = null;
        this.loading = false;
        return;
      }
      this.activeTab = item.id;
      if (item[this.content]) {
        return;
      }
      this.loading = true;
      this.$emit('get-content', item);
      // todo: async? callback?
      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
  .accordion {
    margin: 20px 0;
    padding: 0;
  }
</style>
