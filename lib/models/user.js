/**
 * Created by Bulatie on 13-12-2.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

// Schema
var Schema = new Schema({
    name: String,
    hash_password:String
});

Schema.virtual("password").set(function (password) {
    this.hash_password = encryptPassword(password);
});

Schema.method("authenticate", function (plainText) {
    return encryptPassword(plainText) === this.hash_password;
});

function encryptPassword(password) {
    return crypto.createHash("md5").update(password).digest("hex");
}

mongoose.model('User',Schema);