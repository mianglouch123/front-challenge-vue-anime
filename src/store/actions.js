import { getTimeZone } from "../api/auth"

const actions = {
     async getTimeZoneToken({commit} , token){
      commit('SET_TOKEN', token)
    //   commit('SET_TOKEN' , token )
   }
}


export default actions 
  