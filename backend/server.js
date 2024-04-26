const http= require('http')
const express = require('express')
const app = express()
const { Server } = require('socket.io')

const server= http.createServer(app);
const io = new Server(server);

const port = 3005;

io.on('connection', (socket)=>{
    console.log('A client connected' + socket.id);

    socket.on('message',(message)=>{
        io.emit('message', message);
    })
})

server.listen(port, ()=>{
    console.log(`Server is running on the port: ${port}`);
})
