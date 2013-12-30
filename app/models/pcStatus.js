/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var PcStatusSchema = new Schema({
    machineId: Number,
    status: String,
    belong: Number
});

mongoose.model('PcStatus', PcStatusSchema);