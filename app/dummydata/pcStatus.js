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
        },{
            machineId : 4,
            belong: 1
        }, {
            machineId : 5,
            belong: 1
        }, {
            machineId : 6,
            belong: 1
        },{
            machineId : 7,
            belong: 1
        }, {
            machineId : 8,
            belong: 1
        }, {
            machineId : 9,
            belong: 1
        },{
            machineId : 10,
            belong: 1
        }, {
            machineId : 11,
            belong: 1
        }, {
            machineId : 12,
            belong: 1
        },{
            machineId : 13,
            belong: 1
        }, {
            machineId : 14,
            belong: 1
        }, {
            machineId : 15,
            belong: 1
        }, {
            machineId : 16,
            belong: 1
        }, {
            machineId : 17,
            belong: 1
        }, {
            machineId : 18,
            belong: 1
        }, {
            machineId : 19,
            belong: 1
        }, {
            machineId : 20,
            belong: 1
        },{
            machineId : 21,
            belong: 1
        }, {
            machineId : 22,
            belong: 1
        }, {
            machineId : 23,
            belong: 1
        },{
            machineId : 24,
            belong: 1
        },{
            machineId : 25,
            belong: 1
        }, {
            machineId : 26,
            belong: 1
        }, {
            machineId : 27,
            belong: 1
        },{
            machineId : 28,
            belong: 1
        }, {
            machineId : 29,
            belong: 1
        }, {
            machineId : 30,
            belong: 1
        },{
            machineId : 31,
            belong: 1
        },{
            machineId : 32,
            belong: 1
        }, {
            machineId : 33,
            belong: 1
        }, {
            machineId : 34,
            belong: 1
        },{
            machineId : 35,
            belong: 1
        }, {
            machineId : 36,
            belong: 1
        }, {
            machineId : 37,
            belong: 1
        },{
            machineId : 38,
            belong: 1
        },{
            machineId : 39,
            belong: 1
        }, {
            machineId : 40,
            belong: 1
        },{
            machineId : 41,
            belong: 3
        }, {
            machineId : 42,
            belong: 3
        }, {
            machineId : 43,
            belong: 3
        },{
            machineId : 44,
            belong: 3
        }, {
            machineId : 45,
            belong: 3
        }, {
            machineId : 46,
            belong: 3
        },{
            machineId : 47,
            belong: 3
        }, {
            machineId : 48,
            belong: 3
        }, {
            machineId : 49,
            belong: 3
        },{
            machineId : 50,
            belong: 3
        },{
            machineId : 51,
            belong: 3
        }, {
            machineId : 52,
            belong: 3
        }, {
            machineId : 53,
            belong: 3
        },{
            machineId : 54,
            belong: 3
        }, {
            machineId : 55,
            belong: 3
        }, {
            machineId : 56,
            belong: 3
        },{
            machineId : 57,
            belong: 3
        }, {
            machineId : 58,
            belong: 3
        }, {
            machineId : 59,
            belong: 3
        },{
            machineId : 60,
            belong: 3
        },function(err) {
            console.log('finished populating PcStatus');
        }
    );
});