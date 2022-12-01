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
  email:String,
  password:String
});
// the mongoose  modal
const SignUp = mongoose.model('SignUp', signUpSchema);

//get the root
app.get('/', function(req , res) {
  res.render("signUp")
});
app.post('/', function (req, res) {
  const myFName = req.body.yourName;
  res.render("home", {YourName: myFName});

  bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
    const newUser = new SignUp ({
      email: req.body.email,
      password: hash
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
// to switch between signup & login
app.post('/signUp', function(req, res) {
  res.render('signUp')
});

// login root
app.get('/login', function(req, res) {
  res.render('login')
});
app.post('/login', function(req, res){
  res.render('login');
  const emailLogin = req.body.email;
  const passwordLogin = req.body.password;

  SignUp.findOne({email: emailLogin}, function(err, foundUser) {
    if (err) {
      console.log(err);
      res.redirect('appErr');
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function(err, result){
          if (result === true) {
            res.render('home')
          }
        });
      }
    }
  });
});
// get the logout root
app.post('/logout', function(req, res) {
  res.redirect('/');
});



app.listen(3000, function () {
  console.log("server is running on port 3000");
});
