/**
 * Created by Bulatie on 13-12-2.
 */
'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    crypto = require('crypto');

var md5 = crypto.createHash('md5'),
    password = md5.update('bulatie').digest('hex');

//Clear old things, then add things in
User.find({}).remove(function() {
    User.create({
            name : 'bulatie',
            hash_password : password,
            identity: 'managementer'
        }, function(err) {
            console.log('finished populating Users');
        }
    );
});