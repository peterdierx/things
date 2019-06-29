// GETTERS
export default {
  
  // THINGS BY CATEGORY
  thingsByCategory( state ) {
    const category = state.categories.find( category => category.selected )
    return state.things.filter( name => name.category === category.name )
  },

  // SELECTED CATEGORY
  selectedCategory( state ) {
    const category = state.categories.find( category => category.selected )
    return category.name
  }

}
