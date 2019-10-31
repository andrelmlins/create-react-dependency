const net = require("net");

const portChecker = (port, base, callback) => {
  const server = net.createServer(socket => {
    socket.write("Echo server\r\n");
    socket.pipe(socket);
  });

  server.listen(port, base);

  server.on("error", () => {
    portChecker(port + 1, base, newPort => callback(newPort));
  });

  server.on("listening", () => {
    server.close();
    callback(port);
  });
};

module.exports = portChecker;
