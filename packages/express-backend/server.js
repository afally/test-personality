const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var crypto = require("crypto");

const dotenv = require("dotenv");
dotenv.config();

// Using Express

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require("body-parser");
const Questions = require("./Models/Question");
const passport = require("passport");
const questions = require("./routes/api/questions");

const app = express();
// Allow requests from http://localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.log(error));

//use routes
app.use("/api/questions", questions);

// Server our client app

if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res, next) {
    if (req.headers["x-forwarded-proto"] != "https")
      res.redirect("https://app.salesngine.com" + req.url);
    else next();
  });
  app.use(express.static("./client/build"));

  app.get("/*", (req, res) => {
    res.sendFile("./client/build/index.html", { root: __dirname });
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server started on port ${port}`));
