// Rick y Morty API => https://rickandmortyapi.com/documentation
import { createStore } from 'vuex'

export default createStore({
  state: { 
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: { 
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: { // Actions => To access to mutations.
    async getCharacters({commit}) {
      try { // When init our app:
        const response_api_links = await fetch("https://rickandmortyapi.com/api") // Load the Rick y Morty API links.
        const api_links = await response_api_links.json()

        const response_characters = await fetch("https://rickandmortyapi.com/api/character") // Load the Rick y Morty characters.
        const data_characters = await response_characters.json()

        const response_episodes = await fetch("https://rickandmortyapi.com/api/episode") // Load the Rick y Morty episodes.
        const data_episodes = await response_episodes.json()

        const response_location = await fetch("https://rickandmortyapi.com/api/location") // Load the Rick y Morty location.
        const data_location = await response_location.json()

        commit("setCharacters", data_characters.results) // Load characters into our variables.
        commit("setCharactersFilter", data_characters.results)
        
        // console.log(api_links); // All API links.
        // console.log(data_characters); // All data characters.
        // console.log(data_episodes); // All data episodes.
        // console.log(data_location); // All data location.

      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
