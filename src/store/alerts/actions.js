export default {
   async sendMessage({commit}, message){
       commit('sendMessage', message)
    }
}
