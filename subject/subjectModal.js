const mongoose = require('mongoose')

const subjects = new mongoose.Schema({
    subject: String,
    totalMarks: String,
    marksObtain: String,
    passingMarks: String
})
const subjectdata = new mongoose.model("subjectdata", subjects)

module.exports = subjectdata