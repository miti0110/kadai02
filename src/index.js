const net = require("net");

const server = net.createServer((socket) => {
  console.log("通信来たよ");

  socket.on("data", (data) => {
    console.log(data.toString());

    const statusLine = "HTTP/1.1 200 ok\r\n";
    const header = "Host: codesndbox\r\n";

    const response = statusLine + header + "\r\n" + "HELLO WOLD" + "\r\n";
    socket.write(response);
    socket.end();
  });
});

server.listen(8080);
