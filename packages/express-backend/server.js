const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var crypto = require('crypto');

const dotenv = require("dotenv")
dotenv.config()




// Using Express

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
const Questions = require('./Models/Question');
const passport = require("passport");
const questions = require("./routes/api/questions");

const app = express();
// Allow requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json({limit: '50mb'}));


app.use(bodyParser.urlencoded({ limit: '100mb',extended: true }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

// Middleware to validate API key
/*const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key']; // Assuming API key is included in the 'x-api-key' header

  // Perform validation logic
  if (isValidApiKey(apiKey)) {
    next(); // API key is valid, allow the request to proceed
  } else {
    res.status(401).json({ error: 'Invalid API key' });
  }
};

// Apply middleware to protected routes
app.get('/api/protected', validateApiKey, (req, res) => {
  // Endpoint logic for protected route
});

// Helper function to validate API key
function isValidApiKey(apiKey) {
  // Perform validation against the stored API keys
  // Return true if the API key is valid, false otherwise
}
*/
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.log(error))
    
  
//use routes
app.use("/api/questions", questions);
// Passport middleware
//app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);




// Server our client app

if (process.env.NODE_ENV === 'production') {

    app.get('*',function(req,res,next){ if(req.headers['x-forwarded-proto']!='https') res.redirect('https://app.salesngine.com'+req.url); else next() });
    app.use(express.static('./client/build'));

 
    app.get('/*', (req, res) => {
      res.sendFile('./client/build/index.html', { root: __dirname });
  });

}

const port = process.env.PORT || 3001


app.listen(port, () => console.log(`server started on port ${port}`));

