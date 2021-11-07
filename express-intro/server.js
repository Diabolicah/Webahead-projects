const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api", (req, res) => res.status(401).send("Unauthorized"));
app.get("/poop", (req, res) => {
  res.redirect("/api");
});
app.listen(port, () => console.log(`Example app listening on port port!`));
