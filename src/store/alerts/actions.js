export default {
   async sendMessage({commit}, message){
       commit('alerts/sendMessage', message)
    }
}
