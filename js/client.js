//jshint esversion: 6

const net = require('net');

let client = net.createConnection(6969, 'localhost');

client.on('connect', (stuff) => {
  process.stdin.pipe(client);
});

client.on('data', (stuff) => { //do the parameters need to be the same?
  console.log(`Server broadcast: ${stuff} `);

});