/**
 * Created by Bulatie on 13-12-3.
 */
'use strict';

var mongoose = require('mongoose'),
    PcStatus = mongoose.model('PcStatus');

//Clear old things, then add things in
PcStatus.find({}).remove(function() {
    PcStatus.create({
            id : 1,
            status: 'free'
        }, {
            id : 2,
            status: 'using'
        }, {
            id : 3,
            status: 'fixing'
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