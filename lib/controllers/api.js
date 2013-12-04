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

exports.enterSite = function(req,res) {
    return User.find(function(err,login){
        if(!err){
            return res.json(login);//bug!!!!!!!!!!!!!!!!!!!!!1
        } else {
            return res.send(err);
        }
    })
}