/*
* Module Dependencies
* use for IC card
* */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var registersSchema = new Schema({
    CId: {
        type:Number,
        default: null
    },
    name: {
        type:String,
        default:''
    },
    sno: {
        type:Number,
        default:null
    },
    tel: {
        type:Number,
        default:''
    }
});

mongoose.model('Registers', registersSchema);