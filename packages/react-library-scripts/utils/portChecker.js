"use strict";

const net = require("net");

const portChecker = (port, callback) => {
  const server = net.createServer(socket => {
    socket.write("Echo server\r\n");
    socket.pipe(socket);
  });

  server.listen(port, "127.0.0.1");

  server.on("error", () => {
    portChecker(port + 1, newPort => callback(newPort));
  });

  server.on("listening", () => {
    server.close();
    callback(port);
  });
};

module.exports = portChecker;
