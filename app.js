require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const app = express();
app.use(express.static("Public"));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));

// Data Base section
mongoose.connect("mongodb://localhost:27017/webapplicationDB", {useNewUrlParser: true});

// schema to signUp
const signUpSchema = new mongoose.Schema({
  nameOfUser:String,
  emailToSignUp:String,
  passwordToSignUp:String
});
// schema to login
// const loginSchema = new mongoose.Schema({
//   emailToLogin:String,
//   passwordToLogin:String
// });

// the mongoose  modal
const SignUp = mongoose.model('SignUp', signUpSchema);
// const Login = mongoose.model('Login', loginSchema);

//get the root
app.get('/', function(req , res) {
  res.render("signUp")
});
app.post('/', function (req, res) {
  const myFName = req.body.yourName;
  res.render("home", {YourName: myFName});
  bcrypt.hash(req.body.passwordSignUp , saltRounds, function(err, hash) {
    const newUser = new SignUp ({
      emailToSignUp: req.body.emailSignUp,
      passwordToSignUp: hash
    });
    newUser.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.render('home')
      }
    });
  });
});

// get the logout root
app.post('/logout', function(req, res) {
  res.redirect('/');
});



app.listen(5000, function () {
  console.log("server is running on port 5000");
});
