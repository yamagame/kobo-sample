var net = require('net');
var port = 5000;

var server = net.createServer(function(socket) {
  console.log('client connected');
  socket.on('data', data => {
    socket.write(data.toString().toUpperCase());
  })
});

server.listen(port, '127.0.0.1');
