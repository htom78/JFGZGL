/**
 * Created by Bulatie on 13-12-2.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

// Schema
var UserSchema = new Schema({
    username: String,
    hash_password:String
});

UserSchema.virtual("password").set(function (password) {
    this.hash_password = encryptPassword(password);
});

UserSchema.method("authenticate", function (plainText) {
    return encryptPassword(plainText) === this.hash_password;
});

function encryptPassword(password) {
    return crypto.createHash("md5").update(password).digest("hex");
}

mongoose.model('User', UserSchema);