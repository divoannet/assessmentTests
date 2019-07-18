<template>
  <li class="accordion-tab" :class="{ active: active }">
    <div class="accordion-tab-title" v-on:click="$emit('on-click-handler', item)">
      {{title}}
    </div>
    <div class="loading" v-if="loading && active">
      ...loading
    </div>
    <transition name="slide-fade">
      <div class="accordion-tab-content" v-if="active" v-html="content"></div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
  .accordion-tab {
    list-style: none;
    margin: 0;
    padding: 0;

    & + & {
      border-top: solid 1px #eee;
    }

    .accordion-tab-content {
      overflow: hidden;
      transition: max-height .4s ease-out;
      font-size: 14px;
      padding: 20px;
    }
  }
  .accordion-tab-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 8px 16px;
    cursor: pointer;
  }
  .slide-fade-enter-active {
    max-height: 10000px;
    opacity: 1;
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    max-height: 10000px;
    opacity: 1;
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
  }
</style>
