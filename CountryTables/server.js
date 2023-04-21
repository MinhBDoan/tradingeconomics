const express = require("express");
const te = require("tradingeconomics");
const app = express();

//Serve static files from the "public" directory
app.use(express.static("public"));

//Set up Trading Economics API credentials
te.login("e9633ae77f5c4c6:9cwkmjfi903i1ge");

//Endpoint for getting calendar data
app.get("/calendar", (req, res) => {
  te.getCalendar()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred");
    });
});

//Port for the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
