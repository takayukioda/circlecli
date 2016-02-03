'use strict';

var
  request = require('request');

function CircleCI (token) {
  this._prefix = "https://circleci.com/api/v1"
  this._token = token;
}

CircleCI.prototype.prefix = function () {
  return this._prefix;
};

CircleCI.prototype.token = function (token) {
  if (token) {
    this._token = token;
    return this;
  } else {
    return this._token;
  }
};

CircleCI.prototype.endpoint = function (path) {
  return `${this.prefix()}/${path.replace(/^\//, '')}`;
};

CircleCI.prototype.me = function () {
  return new Promise((resolved, rejected) => {
    var options = {
      uri: this.endpoint('/me'),
      qs: {
        "circle-token": this.token(),
      },
      method: 'GET',
      json: true,
    }
    request(options, (err, res, body) => {
      if (err) {
        return rejected(err)
      } else if (res.statusCode >= 200 && res.statusCode <300) {
        return resolved(body);
      } else {
        rejected(res);
      }
    });
  });
};

module.exports = CircleCI;
