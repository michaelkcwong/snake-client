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
  //   for(let i = 1; i <= 20; i++)(
  //     setTimeout(() => {
  //       conn.write('Move: up'); //move up
  //   }, 50 * i))
  //   setInterval(() => {
  //     conn.write('Move: up'); // move and delay by 50ms apart
  //     conn.write('Move: right');
  //     conn.write('Move: down');
  //   }, 50);
  //   conn.write('Move: up');
  //   conn.write('Move: left');

 });

  //timer for being idle and prints below
  // conn.setTimeout(5000);
  // conn.on('timeout', () => {
  //   console.log('you ded cuz you idled');
  //   conn.end();
  // });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};