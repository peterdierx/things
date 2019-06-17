// MODULES
const cors    = require( 'cors' )
const sqlite  = require( 'sqlite3' )
const express = require( 'express' )

// PORT
const port = 4567

// EXPRESS
const api = express()

// BODY PARSER
api.use( express.json() )

// CORS
api.use( cors() )

// INDEX
api.get( '/', ( request, response ) => {
  response.send( 'Things API - Peter Dierx 2019' )
})

// SERVER
const server = api.listen( port )
console.log( `Listening at http://localhost:${ port }` )
