'use strict';

var path = require('path');

module.exports = function(app) {

    app.get('/partials/index',function(req,res) {
        res.render('./partials/index',function(err, html) {
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/partials/enterSite',checkNotLogin);
    app.get('/partials/enterSite',function(req,res) {
        res.render('./partials/enterSite',function(err, html) {
            console.log(req.session.user);
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/partials/main',checkLogin);
    app.get('/partials/main',function(req,res) {
        res.render('./partials/main',function(err, html) {
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/partials/usePc',checkLogin);
    app.get('/partials/usePc',function(req,res) {
        res.render('./partials/usePc',function(err, html) {
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/partials/fix',checkLogin);
    app.get('/partials/fix',function(req,res) {
        res.render('./partials/fix',function(err, html) {
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/logout',function(req, res) {
        console.log(req.session.user);
        req.session.user = null;
        console.log(req.session.user);
        req.flash('success', '登出成功!');
        res.redirect('/');
    });

    app.get('/*',function(req, res) {
        res.render('index',{
            user: req.session.user
        });
    });

    function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录!');
            res.redirect('/partials/enterSite');
        }
        next();
    }

    function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录!');
            res.redirect('/partials/main');
        }
        next();
    }
}
