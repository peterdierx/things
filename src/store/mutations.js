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

  // SELECT CATEGORY
  category( state, index ) {
    state.categories.forEach( category => category.selected = false )
    state.categories[ index ].selected = true
  }
  
}
