require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(express.static("Public"));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
  extended: true
}));

// Data Base section
mongoose.connect("mongodb://localhost:27017/webapplicationDB", {useNewUrlParser: true});

// schema to signUp
const userSchema = new mongoose.Schema({
  email:String,
  password:String
});

// the mongoose  modal
const User = mongoose.model('User', userSchema);

//get the root
app.get('/', function(req , res) {
  res.render("signUp");
});
app.post('/', function(req, res) {
  bcrypt.hash(req.body.password , saltRounds, function(err, hash) {
    const newUser = new User ({
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

app.get('/login', function(req, res) {
  // res.render('login');
});
app.post('/login', function(req, res) {
  res.render('login')
})
//get the exprole root
// app.get('/exprole', function(req, res) {
//   res.render("exprole");
// })
// app.post('/exprole', function(req, res) {
//   res.render("exprole")
// });
// get the logout root
app.post('/logout', function(req, res) {
  res.redirect('/');
});



app.listen(5000, function () {
  console.log("server is running on port 5000");
});
