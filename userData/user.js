const mongoose = require('mongoose')

const assignuser = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String

}) 
const UserAssign = mongoose.model("UserAssign", assignuser)
module.exports = UserAssign