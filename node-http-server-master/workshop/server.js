const http = require("http");
const PORT = "3000";

const router = require("./router");

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
