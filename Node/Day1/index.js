// Middleware 

const express = require("express");
const app = express();

// Logger Middleware
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);


const authMiddleware = (req, res, next) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return res.status(401)
    .send("Unauthorized");
  }
  next();
};

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to Dashboard");
});


// Middleware without next()
app.use((req, res) => {
  res.send("Response handled here");
});
