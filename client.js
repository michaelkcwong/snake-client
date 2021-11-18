const net = require("net");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //code that does something when the connection is first established
  conn.on("connect", () => {
    console.log('Successfully connected to the game server') //Prints
    conn.write("Name: M.W"); //Sends name to server upon connection
  });
  

  //timer for being idle and prints below
  conn.setTimeout(3000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
}