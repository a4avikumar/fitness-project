

// // user = {
// //     name: string* 
// //     username: string*
// //     password: string*
// // }
// const mongoose = require('mongoose'); 
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     username: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
// })
// const User = new mongoose.model("User", UserScheme)

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
