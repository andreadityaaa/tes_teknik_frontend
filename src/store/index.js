import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [],
    selectedCat: {}
  },
  mutations: {
    setCats (state, payload) {
      state.cats = payload
    },
    setSelectedCat (state, payload) {
      state.selectedCat = payload
    }
  },
  actions: {
    fetchCats (context) {
      axios({
        method: 'GET',
        url: 'https://api.thecatapi.com/v1/breeds'
      })
        .then(({ data }) => {
          context.commit('setCats', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchSelectedCat (context, name) {
      axios({
        method: 'GET',
        url: `https://api.thecatapi.com/v1/breeds/search?q=${name}`
      })
        .then(({ data }) => {
          context.commit('setSelectedCat', data)
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          }
        })
    }
  },
  modules: {
  }
})
