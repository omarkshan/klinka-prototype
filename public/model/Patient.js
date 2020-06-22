const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    user_key: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    effort: {
        type: String,
        required: true
    }
})

const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient