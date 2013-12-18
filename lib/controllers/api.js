'use strict';

var mongoose = require('mongoose'),
    PcStatus = mongoose.model('PcStatus'),
    User = mongoose.model('User'),
    async = require('async'),
    identity = 'zero';

exports.pcStatuses = function(req, res) {
    return PcStatus.find(function (err, pcstatuses) {
        if (!err) {
            return res.json(pcstatuses);
        } else {
            return res.send(err);
        }
    });
};


exports.enter = function(req, res) {
    console.log(req.session.user);
    var data;
    if (identity === 'managementer') {
        data = 'managementer';
    } else if (identity === 'normal') {
        data = 'normal';
    } else {
        data = undefined;
    }
    res.json(data);
};


exports.enterSite = function (req, res) {
    User.findOne({name:req.body.name}, function (err, user) {
        if (err)
            return res.json({err:err});
        if (!user) {
            return res.json({err:'用户名不存在'});
        }
        if (!user.authenticate(req.body.password))
            return res.json({err:'密码错误'});
        req.session.user = user;
        identity = req.session.user.identity;
        console.log(identity);
        res.json(user);
    });
};
