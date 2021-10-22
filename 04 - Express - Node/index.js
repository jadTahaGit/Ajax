const express = require("express");
const app = express();
const port = 8000;
const wiki = require("./wiki.js");

//Route Handlers
app.get("/", (req, res) => {
  res.send("Hello World!");
  // res.sendFile("C:/Users/jadta/OneDrive/Development/ajax/moreDynamic/jad.json");
  // res.sendFile(
  //   "C:/Users/jadta/OneDrive/Development/ajax/moreDynamic/index.html"
  // );
});

//This loges to the console and passes the handler to all kindes of HTTP metods
// app.all("/secret", function (req, res, next) {
//   console.log("Accessing the secret section ...");
//   next(); // pass control to the next handler
// });

// Handling Errors:
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use("/wiki", wiki);
