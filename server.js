const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport'),
const mongoose = require('mongoose'),
const cookieParser = require('cookie-parser'),
const cookieSession = require('cookie-session');
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/auth";
mongoose.connect(mongoURI, err => {
  if (err) {
    throw err;
  }
  console.log('Successfully connected to mongo!');
});
require('./models/User');

//Passport has to be after Mongo or it breaks
require('./config/passport');


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [123]
  })
);

// this tells passport to use cookies
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public')); //serves the index.html
require('./config/routes')(app);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
