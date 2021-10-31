const fs = require("fs");
const path = require("path");

console.log(__dirname);

fs.readFile(path.join(__dirname, "test.txt"), { encoding: "utf-8" }, (error, file) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(file);
});
