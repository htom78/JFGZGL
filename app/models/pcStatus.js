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
    useId: {
        type: String,
        default: ''
    }
});

mongoose.model('PcStatus', PcStatusSchema);