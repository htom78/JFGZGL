/**
 * DummyData pcStatus
 */

var mongoose = require('mongoose'),
    config = require('../../config/config'),
    PcStatus = mongoose.model('PcStatus');

//Clear old things, then add things in
PcStatus.find({}).remove(function() {
    PcStatus.create({
            id : 1,
            status: 'free'
        }, {
            id : 2,
            status: 'free'
        }, {
            id : 3,
            status: 'free'
        }, {
            id : 4,
            status: 'free'
        }, {
            id : 5,
            status: 'free'
        }, function(err) {
            console.log('finished populating PcStatus');
        }
    );
});