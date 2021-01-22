<template>
  <div class="mt-3">
    <CatCard :cat="cat" />
  </div>
</template>

<script>
import CatCard from './CatCard'

export default {
  name: 'CatBoard',
  props: ['cat'],
  components: {
    CatCard
  }
}
</script>

<style scoped>

</style>
