// server.js
/**
 * Required External Modules
 */
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const bcrypt = require('bcrypt');

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
  
})

app.get("/register", function (req, res) {
  res.send("Hello World")
  
})

let users = [];
let hash;
app.get("/login", async (req, res) => {
})

app.post("/login", async function (req, res) {
    
    // const hashedPassword = await bcrypt.hash(req.body.password.toString(), 10)
    // const enteredUser = {
    //   name: req.body.name.toString(),
    //   password: hashedPassword,
    // }
    
    fs.readFile("users.js", (error, data) => {
      if (error) {
          console.log(error)
      }
      users = JSON.parse(data);
      // console.log(users.length)
      for (let index = 0; index < users.length; index ++){
          let user = users[index];
          for(let pw in user){
              if(user.hasOwnProperty(pw)){

                  hash = user.password;
                  
              }
              bcrypt.compare(user.password, hash, (error, result) => {
                console.log(user.password)
                console.log(hash)
                console.log(error)
                
                
              })

          }
      }
  })
})

app.post("/register", async function (req, res) {
  // Generate salt for bcrypt
  try {
      const hashedPassword = await bcrypt.hash(req.body.password.toString(), 10)
      const user = {
        name: req.body.name.toString(),
        password: hashedPassword,
      }
      hash = hashedPassword;
      //   Read file to get existing users
    fs.readFile("users.js", (error, data) => {
    if (error) {
      console.log(error)
    }
    // Convert JSON to object
    users = JSON.parse(data)

    // Add new JSON object
    users.push(user)
    
    // Write to file
    fs.writeFile("users.js", JSON.stringify(users), (error) => {
      if (error) {
        console.log(error)
      }
    })
  })
  } catch (error) {
      res.statusCode(500)
  }
  
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log("Listening to port: " + port)
})
