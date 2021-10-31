function handler(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>Not Found</h1>");
}

module.exports = handler;
