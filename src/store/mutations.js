// COMMIT MUTATIONS
export default {
  
  // CREATE
  NEW_THING( state, payload ) {
    state.things.push( payload )
  },

  // READ
  THINGS( state, payload ) {
    state.things = payload
  },

  // UPDATE
  UPDATE_THING( state, payload ) {
    const thing     = state.things.find( thing => thing.id == payload.id )
    thing.title     = payload.title
    thing.content   = payload.content
    thing.category  = payload.category
    thing.completed = payload.completed
  },

  // DELETE
  DELETE_THING( state, payload ) {
    const thing = state.things.find( thing => thing.id == payload.id )
    state.things.splice( state.things.indexOf( thing ), 1 )
  },

  // SELECT CATEGORY
  category( state, index ) {
    state.categories.forEach( category => category.selected = false )
    state.categories[ index ].selected = true
  }
  
}
