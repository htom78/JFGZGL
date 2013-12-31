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
    PcStatus.find().sort('machineId').exec(function(err,pcstatuses) {
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
    var machineId = req.body.machineId;
    var useOn = new UseLog(req.body);
    var useId = null ;
    useOn.save(function (err,doc) {
        if (err) {
            message = '上机出现问题请重新上机！';
        } else {
            message = '上机成功！';
            useId = doc._id;
            console.log(doc._id);
        };
        console.log(message);
        PcStatus.findOneAndUpdate({machineId: machineId}, {
            status: req.body.status,
            userId: useId
        }, function (err,doc) {
            if (err) {
                message = '修改状态失败！';
            } else {
                message = '修改状态成功！';
                console.log(doc);
            };
            console.log(message);
        })
    });



}

/*
 *create use log Off
 */

exports.useOff = function(req,res) {
    var message = null;
    var useId = '';
    PcStatus.findOneAndUpdate({ machineId: req.body.machineId },{
        status: 'free'
    }, function (err, doc) {
        if (err) {
            message = '没有找到相应机器！';
        } else {
            console.log(doc);
            useId = doc.userId;
            message = '成功找到相应机器！';
        };
        UseLog.findOneAndUpdate({_Id: useId}, {
            note: req.body.note,
            useOff: new Date().getTime()
        }, function (err) {
            if (err) {
                message = '下机出现问题请重新下机！';
            } else {
                message = '下机成功！';
            };
            console.log(message);

        })
    });

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