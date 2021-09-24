<template>
  <div class="added">
    <p
      v-if="users.length > 0"
      class="addedListTitle">
      <span>
      Список добавленных элементов:
      </span>
    </p>
    <ul class="addedlist">
      <li
        v-for="user in users"
        class="addedlist__item"
        :key="user.value"
      >
        <span>
        {{ user.value }}
        </span>
      </li>
    </ul>
  </div>
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
  .addedListTitle {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 279px;
    height: 26px;
    margin: 13px 0px 0px 0px;
    font-size: 12px;
    line-height: 14px;
    font-family: 'Roboto', sans-serif;
    background: #C4C4C4;
  }
  .addedlist {
      width: 100%;
      height: 100%;
      list-style: none;
      padding: 0px;
      margin: 0px;
      overflow: auto;
  }
  .addedlist::-webkit-scrollbar {
      width: 0;
  }
  .addedlist__item {
    width: 279px;
    height: 53px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    padding: 14px 16px;
    font-family: 'Roboto', sans-serif;
  }
  .addedlist__item span {
    font-size: 12px;
    line-height: 14px;
  }
</style>
