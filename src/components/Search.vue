<template>
  <input
    class="input"
    type="text"
    v-model="query"
    placeholder="Введите имя">
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Search",
  watch: {
    async query(value) {
      if (value && value.length > 1) {
        await this.$store.dispatch('fetchByQuery', value)
      }
    }
  },
  computed: {
    query: {
      get() {
        return this.$store.getters['query'];
      },
      set(value) {
        this.setQuery(value);
      }
    }
  },
  methods: {
    ...mapMutations(['setQuery'])
  },
}
</script>

<style scoped>
  .input {
    width: 100%;
    height: 53px;
    box-sizing: border-box;
    outline: none;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    padding: 14px 16px;
    font-family: 'Roboto', sans-serif;
  }
  .input::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.25);
    font-family: 'Roboto', sans-serif;
  }
</style>
