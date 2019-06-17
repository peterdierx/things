// DISPATCH ACTIONS
import api from '@/services/api'

export default {

  // READ
  async things( { commit } ) {
    const response = await api.getThings()
    commit( 'THINGS' , response.data ) 
  }

}
