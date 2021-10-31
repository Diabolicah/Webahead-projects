const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const helloHandler = require("./handlers/hello");
const missingHandler = require("./handlers/missing");
const submitHandler = require("./handlers/submit");

function route(request, response) {
  const url = request.url;
  const method = request.method;
  if (url == "/") homeHandler(request, response);
  else if (url == "/goodbye") goodbyeHandler(request, response);
  else if (url === "/hello") helloHandler(request, response);
  else if (url == "/submit" && method == "POST") submitHandler(request, response);
  else missingHandler(request, response);
}

module.exports = route;
