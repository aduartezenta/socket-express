const { io } = require('../server')

io.on('connection', (client) => {
    console.log('User connected');

    // Trigger when user disconnect
    client.on('disconnect', () => {
        console.log('User disconnected');
    })

    // Send message to frontend
    client.emit('sendMessage', {
        user: 'Admin',
        message: '¡¡Welcome!!'
    })

    // Trigger when user send a message
    client.on('sendMessage', (data, callback) => {
        // callback("Recibido")
        // Emit to broadcast 
        client.broadcast.emit('sendMessage', data)
    })
})