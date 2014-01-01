/*
 * module dependencies
 * */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Schema
var fixLogSchema = new Schema({
    startName: {
        type:String,
        default:''
    },
    endName: {
        type:String,
        default:''
    },
    machineId: {
        type:Number,
        default:null
    },
    fixOn: {
        type: Date,
        default: Date.now
    },
    fixOff: {
        type: Date,
        default: Date.now
    },
    problem: {
        type: String,
        default: ''
    },
    result: {
        type: String,
        default: ''
    }
})

mongoose.model('FixLog',fixLogSchema)
