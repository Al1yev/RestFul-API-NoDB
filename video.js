const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("[TEST]!");

  res.send("Hello Server!");
});

app.listen(PORT, () => console.log("Server running on http://localhost:5000"));
