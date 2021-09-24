<template>
  <div class="loader" v-if="loading">
    loading
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style scoped>

</style>
