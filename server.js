const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/data", (req, res) => {
  const data = req.body.data;
  const fileData = JSON.stringify({ data });

  fs.writeFile("data.json", fileData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing to file");
    } else {
      console.log("Data written to file");
      res.send("Data written to file");
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
