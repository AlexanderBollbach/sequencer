var express = require("express");
const path = require("path");
const app = express();

var morgan = require("morgan");
app.use(morgan("tiny"));
console.log("morgan");

app.use("/", express.static("./"));

// app.use(express.static("images"));

app.use("/", express.static(path.join(__dirname, "dist/")));

// app.use("/apps", express.static(path.join(__dirname, 'apps/demos')))

app.use((req, res, next) => {
  const fileToSend = path.join(__dirname, "dist/index.html");
  res.sendFile(fileToSend);
});

var server = app.listen(8082, () => console.log(`listening`));
