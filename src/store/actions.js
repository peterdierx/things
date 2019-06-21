// DISPATCH ACTIONS
import api from '@/services/api'

export default {

  // CREATE
  async newThing( { commit }, thing ) {
    const response = await api.newThing( thing )
    commit( 'NEW_THING', response.data )
  },

  // READ
  async things( { commit } ) {
    const response = await api.getThings()
    commit( 'THINGS' , response.data ) 
  }

}
