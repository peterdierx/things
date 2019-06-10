// COMMIT MUTATIONS
export default {

  // SELECT CATEGORY
  category( state, index ) {
    state.categories.forEach( category => category.selected = false )
    state.categories[ index ].selected = true
  }
  
}
