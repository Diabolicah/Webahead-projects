function handler(request, response) {
  response.writeHead(302, { location: "/" });
  response.end();
}

module.exports = handler;
