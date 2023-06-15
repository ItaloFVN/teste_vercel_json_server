// See https://github.com/typicode/json-server#module
async function obterDb(){
    var response = await fetch(`https://nutrischedule.vercel.app/database/db.json`)
    return await response.json();
}

const fs = require('fs')
//const db = JSON.parse(fs.readFileSync('database/db.json'))
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(await obterDb())
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
