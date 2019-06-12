// GETTERS
export default {
  
  // THINGS BY CATEGORY
  thingsByCategory( state ) {
    const category = state.categories.find( category => {
      return category.selected
    })
    return state.things.filter( name => {
      return name.category === category.name
    })
  }

}
