// FILTERS
import Vue from 'vue'

Vue.filter( 'mmddyy', ( date ) => {
  if ( date ) {
    const day   = date.substr( -2 )
    const month = date.substr( 5, 2 )
    const year  = date.substr( 0, 4 )
    return `${ month }-${ day }-${ year }`
  }
})
