let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
//npm i socket.io@2.3.0 --save

let io = socketIO(server);
//app.use(cors());
//let app = require("express")();
//let http = require("http").Server(app);
//let io = require("socket.io")(http);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('client-message', (message) => {
      console.log(message);
      io.emit('server-message', message);
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
