const http = require("node:http");
const fs = require("node:fs/promises");

const server = http.createServer();

server.on("request", async (request, response) => {
  const filePath = "./text.txt";
  try {
    const data = await fs.readFile(filePath);
    response.setHeader("Content-Type", "text/plain");
    response.end(data);
  } catch (error) {
    response.setHeader("Content-Type", "text/plain");
    response.end("Ooops! Error getting data");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Hello Motherfucker, the server is listening on:", server.address());
});
