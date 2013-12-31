/*
* show pc statuses
* */

var mongoose = require('mongoose'),
    config = require('../../config/config'),
    PcStatus = mongoose.model('PcStatus'),
    UseLog = mongoose.model('UseLog'),
    Register = mongoose.model('Registers');

/**
 * List of pcStatus
 */
exports.all = function(req, res) {
    PcStatus.find(function(err,pcstatuses) {
        if(err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(pcstatuses);
        }
    })
};

/*
*create use On
*/
exports.useOn = function(req,res) {
    var message = null;
    var useOn = new UseLog(req.body);
    useOn.save(function (err) {
        if (err) {
            message = '上机出现问题请重新上机！';
        } else {
            message = '上机成功！';
        };

        return res.jsonp(message);
    })


    var pcStautsChange = new PcStatus(req.body);
    pcStautsChange.save(function (err) {
        if (err) {
            message = '修改机器状态失败！';
      } else {
            message = '修改机器状态成功！';
        };

        return res.jsonp(message);
    })
}

/*
 *create use log Off
 */

exports.useOff = function(req,res) {
//    var useOff = new UseLog(req.body);
//    useOff.useOff.save(function (err) {
//        if (err) {
//        } else {
//        }
//    });
//    useOff.others.save(function (err) {
//        if (err) {
//        } else {
//        }
//    })
}

/*
 * fix on
 * */
exports.fixOn = function(req,res) {

}

/*
* fix off
* */
exports.fixOff = function(req,res) {

}