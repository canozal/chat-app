const io = require('socket.io')(3001)

const users = {}


io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        io.emit('user-connected', {name: name, users: users})
    })
    socket.on('send-chat-message', message => {
        io.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        let user_name = users[socket.id]
        delete users[socket.id]
        io.emit('user-disconnected', {name: user_name, users: users})
    })
})