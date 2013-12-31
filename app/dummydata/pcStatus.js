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
            belong: 1
        }, {
            machineId : 2,
            belong: 1
        }, {
            machineId : 3,
            belong: 1
        }, {
            machineId : 4,
            belong: 1
        }, {
            machineId : 5,
            belong: 3
        }, function(err) {
            console.log('finished populating PcStatus');
        }
    );
});