'use strict';

var path = require('path');

exports.partials = function(req, res, next) {
  var account = req.session.user;
    console.log(account);
  var stripped = req.url.split('.')[0];
  var reg1 = /^\/partials\/(enterSite)?(index)?$/;//如果用字符串之间的比较会不会快一些
  var reg2 = /^\/partials\/enterSite$/;
  if(!reg1.test(stripped)) {
      if(!account) {
          res.redirect('/');
          next();
      };
  } else if(reg2.test(stripped)) {
      if (account) {
          res.redirect('/main');
          next();
      }
  };
  var requestedView = path.join('./', stripped);
  res.render(requestedView,function(err, html) {
    if(err) {
      res.render('404');
    } else {
      res.send(html);
    }
  });
};

exports.index = function(req, res) {
  res.render('index',{
      user: req.session.user
  });
};
