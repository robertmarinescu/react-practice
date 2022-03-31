const express = require("express");
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  console.log("Home page");
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  console.log("Users page");
  res.send("Users page");
});

function logger(req, res, next) {
  next();
  console.log("after");
}

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
