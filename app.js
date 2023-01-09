require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const app = express();
app.use(express.static("Public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

// Data Base section
mongoose.connect("mongodb+srv://walid-allane:walid-database@cluster0.ithytpt.mongodb.net/?retryWrites=true&w=majority/webapplicationDB", {useNewUrlParser: true});

// schema to signUp
const signUpSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});

// the mongoose  modal
const User = mongoose.model('User', signUpSchema);

// the root rout
app.get('/', function(req, res) {
  res.render('root');
});

// get the home root
app.get('/home', function(req, res) {
  res.render('home')
});
// app err
app.get('/appErr', function(req, res) {
  res.render('appErr')
});

//get the root
app.get('/signUp', function(req , res) {
  res.render("signUp")
});
app.post('/signUp', function(req , res) {
  bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
    const newUser = new User ({
      name:req.body.yourName,
      email: req.body.username,
      password: hash
    });
    newUser.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.render('home',{Email: req.body.username, YourName: req.body.yourName })
      }
    });
  });
});

// login root
app.get('/login', function(req, res) {
  res.render('login');
});
app.post('/login', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function(err, result){
          if (result === true) {
            res.render('home',{Email: req.body.username, YourName: req.body.yourName })
          }else{
            console.log(err);
            res.redirect('appErr');
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


// local port
app.listen(process.env.PORT|| 8080, function () {
  console.log("server is running");
});
