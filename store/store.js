export const state = () => {
    return {
        apiData: [],
        isLoading: false,
        error: null,
    }
};

export const mutations = {
    setLoading: (state, isLoading) => state.isLoading = isLoading,
    setError: (state, payload) => state.error = payload,
    setData: (state, data) => {
        state.apiData = data
    },
}

export const actions = {
    async fetchData({ commit }) {
        commit('setLoading', true);
        try {
            const { data } = await this.$axios({
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
                url: 'https://swapi.dev/api/people/',
            });
            commit('setData', data.results)
        } catch (error) {
            commit('setError', error.response)
        }
        commit('setLoading', false)
    }

}