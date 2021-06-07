const express = require('express');
const router = express.Router();
const User = require("../models/user");

 
// Post Routing


/*

router.post("/contact", (req, res) => {
	console.log(req.body.username);
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.password2);
	if (req.body.username && req.body.email && req.body.password && req.body.password2) {
		//check if both req.body.password and req.body.password2 are the same
		if (req.body.password !== req.body.password2) {
			const err = new Error("Password don't match!");
			err.status = 400;
			res.render("error", { errormessage: err });
			console.log("Password are not match");
		} else {
			let user = new User({
				name: req.body.username,
				email: req.body.email,
				password: req.body.password,
			}); //end of let user
			res.render("dashboard", { username: req.body.username, email: req.body.email, password: req.body.password });
		}
	}
});

*/

router.post("/contact", function(req,res){

let new_user = new User(req.body);
console.log(new_user);
new_user.save(function(err, result){
if(err){
	console.log(err);
	res.render("error", {errormessage: "Oops error"});
} else {
	res.render("dashboard", { username: req.body.username, email: req.body.email, password: req.body.password });

}


});

});//end of post


module.exports = router;


//HINT what is the route that you are posting to?