<template>
  <div class="wrapper" id="app">
    <div class="block">
      <h1>
        Accordion demo
      </h1>
      <Accordion
        :data="data"
        :title="data.title"
        :content="data.getContent"
      />
    </div>
  </div>
</template>

<script>
import Accordion from './components/Accordion.vue';

const data = [
  {
    title: ''
  }
];

export default {
  name: 'app',
  components: {
    Accordion,
  },
};
</script>

<style lang="scss">
body {
  background: #1e2f40;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
}
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}
.block {
  background: #fff;
  box-shadow: 0 0.2em 1em rgba(61,48,41,0.2);
  > h1 {
    padding: 24px 24px 16px;
  }
}
</style>
