// const mongoose = require('mongoose');
// const validate = require('validator');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Please enter your name']
//     },
//     email:{
//         type: String,
//         required: [true, 'provide a valid email address.'],
//         unique: true,
//         lowercase: true,
//         validate: [validator.isEmail, 'Please provide a valid Email.']
//     },
//     photo: String,
//     password: {
//         type: String,
//         required: [true, 'Please provide a password'],
//         minlength: 8
//     },
//     passwordConfirm: {
//         type: String,
//         required:[true, 'Please confirm ur pass.']
//     }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;