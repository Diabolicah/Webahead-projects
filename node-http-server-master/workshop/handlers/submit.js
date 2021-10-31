function handler(request, response) {
  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", (chunk) => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    const data = new URLSearchParams(body);
    const name = data.get("name");
    console.log(name); // oli
    console.log(body); // we should have the whole request body now
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<h1>Hello ${name}</h1>`);
  });
}

module.exports = handler;
