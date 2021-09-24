export default {
  state: {
    query: '',
    users: [],
    added: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },

    addUser(state, payload) {
      const duplicate = state.added.find(item => item.value === payload.value)
      if(!duplicate) {
        state.added.push(payload)
      }
    },

    setQuery(state, payload) {
      state.query = payload;
    },

    clearQuery(state) {
      state.query = '';
    }
  },
  actions: {
    async fetchByQuery({commit}, query) {
      commit('clearError')
      commit('setLoading', true);
      const token = process.env.VUE_APP_TOKEN
      try {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
          },
          body: JSON.stringify({query: query})
        }
        const response = await fetch(url, options);
        const json = await response.json();
        const users = json.suggestions.map(user => user)
        console.log(users)
        commit('setUsers', users)
        commit('setLoading', false)

      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    }
  },
  getters: {
    users: state => state.users,
    added: state => state.added,
    query: state => state.query,
  }
}
