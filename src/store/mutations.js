// COMMIT MUTATIONS
export default {
  
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
