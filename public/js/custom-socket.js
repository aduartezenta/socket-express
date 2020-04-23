var socket = io();

socket.on('connect', function() {
    console.log('Connected');
})
socket.on('disconnect', function() {
    console.log('Disconnected');
})

// Send message to backend
socket.emit('sendMessage', {
    user: 'Adrian',
    message: 'Hello world!'
}, function(resp) {
    console.log('OK ' + resp);
})

// Trigger when backend send a message
socket.on('sendMessage', function(message) {
    console.log(message);
})