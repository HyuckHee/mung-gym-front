const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 8000);


app.use(express.static(path.join(__dirname, "/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});