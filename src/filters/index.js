// FILTERS
import Vue from 'vue'

Vue.filter( 'mmddyy', ( date ) => {
  if ( date ) {
    const month = date.substr( 5, 2 )
    const day   = date.substr( -2 )
    const year  = date.substr( 0, 4 )
    return `${ month }-${ day }-${ year }`
  }
})
