<template>
  <div class="wrapper" id="app">
    <div class="block">
      <h1>
        Accordion demo
      </h1>
      <div
        v-if="loading"
      >
        ...loading
      </div>
      <div
        v-if="!loading"
      >
        <Accordion
          :items="items"
          :title="'title'"
          @get-content="getContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Accordion } from './components/Accordion';

export default {
  name: 'app',
  components: {
    Accordion,
  },
  data: () => ({
    loading: true,
    items: [],
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=3')
        .then((response) => {
          this.loading = false;
          this.items = this.parseItemsFromResponse(response);
        })
        .catch(() => {
          this.loading = false;
        });
    },
    parseItemsFromResponse(response) {
      const { documents } = response.data;
      return Object
        .keys(documents)
        .map(key => ({
          id: key,
          title: documents[key].title,
          url: documents[key].url,
          content: '',
        }));
    },
    getContent({ id }) {
      const item = this.items.find(tab => tab.id === id);
      const { url } = item;
      axios
        .get(`https://meduza.io/api/v3/${url}`)
        .then(({ data }) => {
          this.$set(item, 'content', data.root.content.body);
        });
    },
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
