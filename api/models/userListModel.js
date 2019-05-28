'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    Id: {
        type: Number,
        Required: 'Please enter'
    },
    fName: {
        type: String,
        Required: 'Please enter'
    },
    lName: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
    Faculty: {
        type: String,
        Required: 'Please enter'
    },
    Picture: {
        type: String,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now
    },
})

module.exports = mongoose.model('students', UserSchema)
