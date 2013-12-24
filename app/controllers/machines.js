/*
* show pc statuses
* */

var mongoose = require('mongoose'),
    config = require('../../config/config'),
    PcStatus = mongoose.model('PcStatus');

/**
 * List of pcStatus
 */
exports.pcStatuses = function(req, res) {
    PcStatus.find(function(err,pcstatuses) {
        if(err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(pcstatuses);
        }
    })
};