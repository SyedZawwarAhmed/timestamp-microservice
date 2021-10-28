const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Hello world");
});

app.get("/api", (req, res) => {
  const date = new Date();
  const unixString = Math.round(date.getTime() / 1000);
  const now_utc = date.toUTCString();
  res.send({ unix: unixString, utc: now_utc });
});

app.get("/api/:date", (req, res) => {
  const unixString = req.params.date.includes("-")
    ? Math.round(new Date(req.params.date).getTime() / 1000)
    : req.params.date;
  const date = new Date(unixString * 1000);
  const now_utc = date.toUTCString();
  res.send({ unix: unixString, utc: now_utc });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
