// index.js

/**
 * Required External Modules
 */
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const users = require("./users")
/**
 * App Variables
 */
const app = express()
const port = 3000

/**
 *  App Configuration
 */
app.use(cors())
app.use(express.json())

/**
 * Routes Definitions
 */
app.get("/", function (req, res) {
  res.send("Hello World")
  //res.render('login');
})

app.get("/register", function (req, res) {
  res.send("Hello World")
  //   res.render('register');
})

app.post("/register", function (req, res) {
  const user = {
    name: req.body.name.toString(),
    password: req.body.password.toString(),
  }

  //   let userArray = [];
  //   userArray.push(user);

  let existing

  fs.readFile("users.js", (error, data) => {
    if (error) {
      console.log(error)
    }
    // Convert JSON to object
    existing = JSON.parse(data)
    // Add new JSON object
    existing.push(user)
    // console.log(existing)
    // Write to file
    fs.writeFile("users.js", JSON.stringify(existing), (error) => {
      if (error) {
        console.log(error)
      }
    })
  })
  //   console.log(existing)
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log("Listening to port: " + port)
})
