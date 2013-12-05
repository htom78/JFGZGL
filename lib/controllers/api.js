'use strict';

var mongoose = require('mongoose'),
    PcStatus = mongoose.model('PcStatus'),
    User = mongoose.model('User'),
    async = require('async');

exports.pcStatuses = function(req, res) {
    return PcStatus.find(function (err, pcstatuses) {
        if (!err) {
            return res.json(pcstatuses);
        } else {
            return res.send(err);
        }
    });
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
        res.json(user);
    });
};


exports.logout = function (req, res) {
    req.session.user = null;
//    res.json(req.session.user);
};