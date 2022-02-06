const io = require('socket.io')(3001, {
    cors: {
        origin: "*",
    },
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on("sendData", data => {
        socket.broadcast.emit("sendData", data);
    })
})