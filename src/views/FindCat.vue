<template>
  <div class="justify-content-center align-items-center container" style="height: 100vh;">
    <SelectedCat v-for="cat in selectedCat" :key="cat.id" :cat="cat" />
  </div>
</template>

<script>
import SelectedCat from '@/components/SelectedCat.vue'

export default {
  name: 'FindCat',
  components: {
    SelectedCat
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    selectedCat () {
      return this.$store.state.selectedCat
    }
  },
  methods: {
    fetchSelectedCat () {
      const { name } = this.$route.params
      this.$store.dispatch('fetchSelectedCat', name)
    }
  },
  created () {
    this.fetchSelectedCat()
  }
}
</script>

<style>

</style>
