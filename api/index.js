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

// CREATE
api.post( '/things', ( request, response ) => {
  const thing = {
    id:        null,
    created:   new Date().toJSON().slice( 0, 10 ),
    completed: null,
    title:     request.body.title,
    content:   request.body.content,
    category:  request.body.category
  }
  db.run( "INSERT INTO things ( created, title, content, category ) VALUES ( ?, ?, ?, ? )",
        [ thing.created, thing.title, thing.content, thing.category ],
        function( error ) {
          if ( error ) {
            console.error( error )
          } else {
            thing.id = this.lastID
            response.json( thing )
          }
        })
})

// READ
api.get( '/things', ( request, response ) => {
  db.all( "SELECT * FROM things", ( error, rows ) => {
    response.json( rows )
  })
})

// UPDATE
api.put( '/things', ( request, response ) => {
  const thing = {
    id:        request.body.id,
    created:   request.body.created,
    completed: null,
    title:     request.body.title,
    content:   request.body.content,
    category:  request.body.category
  }
  if ( thing.categorie === 'Completed' || thing.category === 'Archive' ) {
    thing.completed = new Date().toJSON().slice( 0, 10 )
  }
  db.run( "UPDATE things SET completed = ?, title = ?, content = ?, category = ? WHERE id = ?",
    [ thing.completed, thing.title, thing.content, thing.category, thing.id ],
    function( error ) {
      if ( error ) {
        console.error( error )
      } else {
        response.json( thing )
      }
    })
})
