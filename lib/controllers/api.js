'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    PcStatus = mongoose.model('PcStatus'),
    User = mongoose.model('User'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

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
        res.json(user);
    });
};