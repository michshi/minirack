// Define DB connections for different environments
module.exports = {
development: {
 client: 'pg',
 connection: 'postgres://localhost/minirack'
},
test: {
  client: 'pg',
  connection: 'postgres://localhost/minirack'
},
production: {
 client: 'pg',
 connection: process.env.DATABASE_URL
}
}
