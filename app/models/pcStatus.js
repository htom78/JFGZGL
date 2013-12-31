/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var PcStatusSchema = new Schema({
    machineId: {
        type: Number,
        default: null
    },
    status: {
        type: String,
        default: 'free'
    },
    belong: Number,
    user: {
        type: String,
        default: ''
    },
    userId: {
        type: String,
        default: ''
    }
});

mongoose.model('PcStatus', PcStatusSchema);