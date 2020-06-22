const mongoose = require('mongoose')

const PhysicianSchema = new mongoose.Schema({
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
    employed_since: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
})

const Physician = mongoose.model('Physician', PhysicianSchema)

module.exports = Physician