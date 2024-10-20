const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employee = new Schema({
name: {
type: String,
},
email: {
type: String,
},
gender: {
type: String,
},
salary: {
type: Number,
},
department: {
type: String,
},
});

module.exports = mongoose.model("employees", employee);