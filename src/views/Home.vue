<template>
  <div class="container">
    <CatBoard v-for="cat in cats" :key="cat.id" :cat="cat" />
  </div>
</template>

<script>
import CatBoard from '@/components/CatBoard.vue'

export default {
  name: 'Home',
  components: {
    CatBoard
  },
  computed: {
    cats () {
      return this.$store.state.cats
    }
  },
  created () {
    this.$store.dispatch('fetchCats')
  }
}
</script>

<style>

</style>
