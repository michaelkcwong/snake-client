const net = require("net");
const { IP, PORT } = require("./constants");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //code that does something when the connection is first established
  conn.on("connect", () => {
    console.log('Successfully connected to the game server'); //Prints
    conn.write("Name: M.W"); //Sends name to server upon connection
  });
 
  //interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};