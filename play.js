const net = require("net");
const { stdout } = require("process");
const { connect } = require('./client.js');
const { setupInput } = require('./input.js');



console.log("Connecting ...");
connect();
setupInput();