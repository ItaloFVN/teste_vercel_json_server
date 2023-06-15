// See https://github.com/typicode/json-server#module
var db = {};

const fetch = require('node-fetch');
fetch(`https://nutrischedule.vercel.app/database/db.json`)
    .then((response) => response.json())
    .then((dados) => {
        db = dados
    });

const fs = require('fs')
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'database/db.json')))
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})


// Export the Server API
module.exports = server
