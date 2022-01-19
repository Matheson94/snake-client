const net = require("net");
const { stdout } = require("process");
const { connect } = require('./client.js')


// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (key === `\u0003`) {
    stdout.write("Bye!");
    process.exit();
  }
}

console.log("Connecting ...");
connect();
setupInput();