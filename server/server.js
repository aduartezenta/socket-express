const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const publicPath = path.resolve(__dirname, '../public')
const port = process.env.PORT || 8080;

let server = http.createServer(app)

module.exports.io = socketIO(server)

app.use(express.static(publicPath))

require('./socket/socket')

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Running in ${ port } port`)
});