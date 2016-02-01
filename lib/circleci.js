'use strict';

var
  request = require('request');

function CircleCI (token) {
  this._prefix = "https://circleci.com/api/v1"
  this._token = token;
}

CircleCI.prototype.prefix = () => {
  return this._prefix;
};

CircleCI.prototype.token = (token) => {
  if (token) {
    this._token = token;
    return this;
  } else {
    return this._token;
  }
};

CircleCI.prototype.endpoint = (path) => {
  return `${this.prefix()}/${path.replace(/^\//, '')}`;
};

CircleCI.prototype.me = () => {
  return new Promise((onFulfilled, onRejected) => {
    var options = {

    }
    request
  });
};

module.exports = CircleCI;