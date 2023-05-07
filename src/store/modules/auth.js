import { getTimeZone } from "../../api/auth"

const state = {
    token: null
  }
  
  const mutations = {
    SET_TOKEN(state, token) {
      state.token = token
    },
    CLEAR_TOKEN(state) {
      state.token = null
    }
  }

  const actions = {
    async getTimeZoneToken({commit}){
      const token = await getTimeZone()
      commit('SET_TOKEN' , token )
   }
}
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
    
}