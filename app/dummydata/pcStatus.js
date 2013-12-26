/**
 * DummyData pcStatus
 */

var mongoose = require('mongoose'),
    config = require('../../config/config'),
    PcStatus = mongoose.model('PcStatus');

//Clear old things, then add things in
PcStatus.find({}).remove(function() {
    PcStatus.create({
            machineId : 1,
            status: 'free'
        }, {
            machineId : 2,
            status: 'free'
        }, {
            machineId : 3,
            status: 'free'
        }, {
            machineId : 4,
            status: 'free'
        }, {
            machineId : 5,
            status: 'free'
        }, function(err) {
            console.log('finished populating PcStatus');
        }
    );
});