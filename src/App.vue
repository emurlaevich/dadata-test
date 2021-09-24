<template>
  <div id="app">
    <div class="container">
      <div class="layout">
        <Search/>
        <Loader/>
        <Error/>
        <List :users="getUsers" isAdd/>
        <button
          class="layout-btn"
          type="button"
          @click="clearSearch"
        >
        Остановить<br>автопоиск
        </button>
      </div>
      <AddedList :users="getAddedUsers"/>
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import Search from "./components/Search";
import Loader from "./components/Loading";
import Error from "./components/Error";
import AddedList from "./components/AddedList";
import {mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    Error,
    Loader,
    Search,
    List,
    AddedList
  },
  computed: {
    getUsers() {
      return this.$store.getters.users
    },

    getAddedUsers() {
      return this.$store.getters.added
    },
  },
  methods: {
    ...mapMutations(['clearQuery']),

    clearSearch() {
      this.clearQuery()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  body {
    background: #E5E5E5;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  .layout {
    position: relative;
    width: 279px;
    height: 383px;
    background: #C4C4C4;
    overflow: hidden;
  }
  .layout-btn {
    position: relative;
    bottom: 141px;
    width: 100%;
    height: 64px;
    background: #7382CD;
    border: none;
    cursor: pointer;
  }
  .layout-btn:active {
    color: #fff;
  }
</style>
