<template>
  <div class="error" :class="{'active': error}">
    <span class="error-text">{{ error }}</span>
    <button class="error-button" @click="close">
      Close
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Error",
  computed: {
    ...mapGetters(['error']),
  },

  methods: {
    ...mapActions(['clearError']),

    close() {
      this.clearError()
    }
  },
}
</script>

<style scoped >
.error{
  display: none;
}

.error.active{
  display: block;
}
</style>
