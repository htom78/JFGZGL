/**
 * Created by Bulatie on 13-12-3.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var PcStatusSchema = new Schema({
    id: Number,
    status: String
});

mongoose.model('PcStatus', PcStatusSchema);