console.log("try out the fs module here");

const fs = require("fs");

fs.readFile("workshop/test.txt", (error, file) => {
  console.log(error, file);
});
