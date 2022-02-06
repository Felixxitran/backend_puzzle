const io = require('socket.io')(3001, {
    cors: {
        origin: "*",
    },
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on("sendData", data => {
        checkCorrectPattern(data);
        socket.broadcast.emit("sendData", data);
    })
});

const checkCorrectPattern = (data) => {
    //if true do randomizePattern function and send new data
    //if false just send data to clients
}

const randomizePattern = (data) => {
    //return new data
}