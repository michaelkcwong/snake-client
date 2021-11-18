const { connect } = require("./client");

// setup interface to handle user input from stdin

const setupInput = function() {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function() { //check for the ctrl + c input and terminate the game
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};