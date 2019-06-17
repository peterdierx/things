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

// SQLITE DATABASE & SERVER
const db = new sqlite.Database( './database/things.sqlite3', sqlite.OPEN_READWRITE, ( error ) => {
  if ( error ) {
    return console.log( error )
  } else {
    console.log( 'Connected to SQLite Database things...' )
    // SERVER
    const server = api.listen( port )
    console.log( `Server listening at http://localhost:${ port }` )
  }
})

// INDEX
api.get( '/', ( request, response ) => {
  response.send( 'Things API - Peter Dierx 2019' )
})

// READ
api.get( '/things', ( request, response ) => {
  db.all( "SELECT * FROM things", ( error, rows ) => {
    response.json( rows )
  })
})
