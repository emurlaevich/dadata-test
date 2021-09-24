<template>
  <ul class="list">
    <li
      v-for="user in users"
      class="list__item"
      :key="user.value"
    >
      <span>
      {{ user.value }}
      </span>
      <button
        class="list-btn"
        v-if="isAdd"
        @click="addUser(user)"
      >
      Добавить
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    users: {
      type: Array,
      required: true
    },

    isAdd: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    addUser(user) {
      this.$store.commit('addUser', user)
    }
  }
}
</script>

<style scoped>
  .list {
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 24px 0px 0px;
    margin: 0px;
    overflow: auto;
  }
  .list::-webkit-scrollbar {
    width: 0;
  }
  .list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 266px;
    height: 49px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    outline: none;
    box-sizing: border-box;
    padding: 14px 16px;
  }
  .list__item span {
    font-size: 12px;
    line-height: 14px;
    color: #000;
    font-family: 'Roboto', sans-serif;
    margin-left: 16px;
  }
  .list-btn {
    width: 104px;
    height: 35px;
    cursor: pointer;
    background: #40B159;
    border: 1px solid #40B159;
  }
  .list-btn:active {
    color: #fff;
  }
</style>
