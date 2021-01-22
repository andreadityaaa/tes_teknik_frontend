<template>
  <b-card-group deck>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="cat.image.url" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="cat.name">
            <b-button :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible"
            > Detail
            </b-button>
            <b-collapse id="collapse-4" v-model="visible" class="mt-2">
              <b-list-group>
                <b-list-group-item>Origin: {{ cat.origin }}</b-list-group-item>
                <b-list-group-item>Temperament: {{ cat.temperament }}</b-list-group-item>
                <b-list-group-item>
                  Wikipedia:
                  <button type="button" @click="toWiki(cat.wikipedia_url)" class="btn btn-link">
                    Click Here
                  </button>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'CatCard',
  props: ['cat'],
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toWiki (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>

</style>
