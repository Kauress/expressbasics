const express = require("express");
const router = express.Router();



router.get("/", function(req, res){
 res.render("index")
});

router.get("/contact", (req, res) => {
    // Please bring me out to dinner first 🍝
    //res.send("Buy me dinner first");
    res.render("contact");
});

// Post Routing
router.post("/contact", (req, res) => {
    if(req.body){
        console.log(req.body.username);
        console.log(req.body.email);
        res.render("dashboard",{username: req.body.username, email: req.body.email});
    }
});

/*
// Get Routing
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/contact", (req, res) => {
    // Please bring me out to dinner first 🍝
    //res.send("Buy me dinner first");
    res.render("contact");
});

// Post Routing
app.post("/contact", (req, res) => {
    if(req.body){
        console.log(req.body.username);
        console.log(req.body.email);
        res.render("dashboard",{username: req.body.username, email: req.body.email});
    }
});
*/


module.exports = router;