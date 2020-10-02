// This means if we are in development, require dotenv
if (process.env.NODE_EV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bcrpyt = require("bcrypt");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const initializePassport = require("./passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.set("view-engine", "ejs");
// This will allow us to use our req variables from our form
// Which is the name property in our ejs
app.use(express.urlencoded({ extended: false }));
app.use(flash());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables when changed?
    resave: false,
    // Save empty values in this session
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Refer to index.ejs to see how overide method is being used
app.use(methodOverride("_method"));

app.get("/", checkAuthentication, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

app.get("/login", checkAlreadyAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    // Flash message
    failureFlash: true,
  })
);

app.get("/register", checkAlreadyAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.post("/register", checkAlreadyAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrpyt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(users);
});

// We cannot call this delete function directly onto our HTML
// Since delete isn't a part of forms and not an express function, we must override it
// Look at index.ejs to see how it is done
app.delete("/logout", (req, res) => {
  // logOut is a part of passport
  req.logOut();
  res.redirect("/login");
});

// This will check if user is authentiacted
// if they aren't they redirected to login
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// We have to check if they are not authenticated
// if they are already logged in, we don't want them to be able to go back and see the login page
function checkAlreadyAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

app.listen(3000);
