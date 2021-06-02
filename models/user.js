const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model("User", UserSchema);
//export the schema
module.exports = User;