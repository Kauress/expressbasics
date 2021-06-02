/*
1. run npm init --y : created package.json file
2. install express
3. install ejs
4. make a file called index.js
5. Create a server!

6. Create a basic route  for the homepage which isdenoted by "/"

 app.get("/", function(request,response){
     response.send("Hello world!");
 })

7. save your work!
8. in the terminal you can either run node index.js or nodemon index.js
9. Create a route for the contact page:
   app.get("/contact", function(request,response){
       response.send("Contact page");
   });

10. MAke a views folder   
11. Inside the views folder make a file called contact.ejs
12. Inside contact.ejs write basic HTML structure for a contact form with name, email input fields there should also
 be an input type = "submit" with value="Contact Us" for the submit button
13. The form should have action = "/" (or whereever you want to post to) and  method = "POST" also don't FORGET
the name attribute for each input element!
14. Tell your app you want to use ejs as the view engine to view your ejs template/templates in this case
contact.ejs :
const path = require('path');
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')
15. Chnage response.send to response.render("contact")
16. HINT: POST, write where you will be posting to
  app.post("/contact", function(request,response){
      console.log(request.body.username);
      console.log(request.body.email)

  })
17.  To get POST data from a form in the request object you need to:

app.use(express.urlencoded({
    extended: true
}));
18. We want to make a template called dashboard.ejs inside the views folder
19. You want to use those hard to type EJS symbols to make template variables and greet the user
"Hello" username. To do this <h1><%= username %></h1>
20. Now you want to render the dashboard page when someone sends the form in response to the POST request
  res.render("dashboard",{username: req.body.username+ " 👋"})

  -------------- Database
  1.  Get the connection string from Atlas or use the one here
  2. Make a config folder
  3. Inside the config folder make a keys.js file
  4. Inside keys.js  we will import our connection with:
  module.exports = {
    MongoURI: "mongodb+srv://class:class123@class.t572x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
5.  npm install mongoose 
6. Inside index.js we want to requre mongoose and set up our connection:
const mongoose = require("mongoose");
const db = require('./config/keys').MongoURI; 
7. Make a models folder 
8.Inside the models folder make a file called user.js which will hold the schema for our perfect user!



*/
//require modules
const express = require('express');
const app = express();
const PORT = 4040;
const path = require('path');
const mongoose = require("mongoose")


//new 
const routes = require("./routes/app")  //I don't think the . is necessary is it?

// set path.join & View Engine setup
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

//Connect to MongoDB
const db = require('./config/keys').MongoURI;  
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true}). then(() => console.log("MongoDB connected")).catch(err => console.log(err)); //We only covered async briefly
//Wuick, sabotage power plant

// use urlencoded & routes
app.use(express.urlencoded({
    extended: true
}));
app.use("/", routes)

// listen to port
app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`);
});
