const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "./static"))); //this is the middleware!!

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on ${port}! `);
});
