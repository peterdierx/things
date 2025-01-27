// DISPATCH ACTIONS
import api from '@/services/api'

export default {

  // CREATE
  async new( { commit }, thing ) {
    const response = await api.newThing( thing )
    commit( 'NEW_THING', response.data )
  },

  // READ
  async things( { commit } ) {
    const response = await api.getThings()
    commit( 'THINGS' , response.data ) 
  },

  // UPDATE
  async update( { commit }, thing ) {
    const response = await api.updateThing( thing )
    commit( 'UPDATE_THING', response.data )
  },

  // DELETE
  async delete( { commit }, thing ) {
    const response = await api.deleteThing( thing )
    commit( 'DELETE_THING', thing )
  }

}
