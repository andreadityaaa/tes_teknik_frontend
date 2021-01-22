<template>
  <b-list-group>
    <b-list-group-item active>Name: {{ cat.name }}</b-list-group-item>
    <b-list-group-item>{{ cat.description }}</b-list-group-item>
    <b-list-group-item>Origin: {{ cat.origin }}</b-list-group-item>
    <b-list-group-item>Temperament: {{ cat.temperament }}</b-list-group-item>
    <b-list-group-item>
      Wikipedia:
      <button type="button" @click="toWiki(cat.wikipedia_url)" class="btn btn-link">
        Click Here
      </button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'SelectedCat',
  props: ['cat'],
  methods: {
    toWiki (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style>

</style>
