var net = require('net');
var port = 5000;

var client = new net.Socket();
client.connect(port, 'localhost', function() {
	console.log('Connected');
  process.stdout.write('>')
});

client.on('data', function(data) {
	console.log(`<${data.toString()}`);
  process.stdout.write('>')
});

client.on('close', function() {
	console.log('Connection closed');
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  client.write(`${line}\r\n`);
});
