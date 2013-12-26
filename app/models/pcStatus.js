/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var PcStatusSchema = new Schema({
    machineId: Number,
    status: String
});

mongoose.model('PcStatus', PcStatusSchema);