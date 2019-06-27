// API CLIENT
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4567'
})

export default {

  // CREATE
  newThing( thing ) {
    return apiClient.post( '/things', thing )
  },

  // READ
  getThings() {
    return apiClient.get( '/things' )
  },

  // UPDATE
  updateThing( thing ) {
    return apiClient.put( '/things', thing )
  }

}
