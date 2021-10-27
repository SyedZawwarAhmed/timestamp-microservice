const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Hello world");
});

app.get("/api", (req, res) => {
  const date = new Date();
  const now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  res.send({ "unix": now_utc, "utc": `${new Date(now_utc)}` });
});

app.get("/api/:date", (req, res) => {
  const date = new Date(req.params.date * 1000);
  res.send({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
