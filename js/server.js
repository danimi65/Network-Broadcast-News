//jshint esversion: 6

const net = require('net');

var server = net.createServer(function(socket) {

  socket.on('data', (stuff) => {
    console.log(`Client: ${stuff} `);
  });

  process.stdin.pipe(socket);

}); 


server.listen(6969, `0.0.0.0`, () => {

});