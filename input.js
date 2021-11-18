// Stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) { //check for the ctrl + c input and terminate the game
  if (key === '\u0003') { // \u0003 is ctrl + c
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up"); // move up
  }

  if (key === "a") {
    connection.write("Move: left"); // move left
  }

  if (key === "s") {
    connection.write("Move: down"); // move down
  }

  if (key === "d") {
    connection.write("Move: right"); //move right
  }

  if (key === "g") {
    connection.write("Say: Good Game"); //says good game
  }

  console.log(key);
};

module.exports = {
  setupInput,
};