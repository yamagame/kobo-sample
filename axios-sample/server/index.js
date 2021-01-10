var express = require("express");
var app = express();
const port = process.env.PORT | 4768;

let counter = 0;

const wait = async (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

// respond with "hello world" when a GET request is made to the homepage
app.get("/sample-api", function (req, res) {
  res.send(`OK`);
});

app.get("/forbidden", function (req, res) {
  res.sendStatus(403);
});

app.get("/timeout", async function (req, res) {
  await wait(10);
  res.send(`OK`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
