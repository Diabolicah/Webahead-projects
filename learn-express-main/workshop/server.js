const express = require("express");
const PORT = process.env.PORT || 3000;
const templates = require("./templates");

const server = express();

let posts = [{ author: "oli", title: "hello", content: "lorem ipsum etc" }];

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.static("./workshop/public"));

server.get("/", (req, res) => {
  const html = templates.home();
  res.send(html);
});

server.get("/new-post", (req, res) => {
  const newPost = templates.newPost();
  res.send(newPost);
});

server.post("/new-post", express.urlencoded(), (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.redirect("posts");
});

server.get("/delete-post/:title", (req, res) => {
  posts = posts.filter((p) => p.title !== req.params.title);
  res.redirect("/posts");
});

server.get("/posts", (req, res) => {
  const allPosts = templates.allPosts(posts);
  res.send(allPosts);
});

server.get("/posts/:title", (req, res) => {
  const post = posts.find((p) => p.title === req.params.title);
  const html = templates.post(post);
  res.send(html);
});
