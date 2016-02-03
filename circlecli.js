#!/usr/bin/env node
'use strict';

var
  argv = require('yargs').argv,
  sub  = argv._[0],
  CircleCI = require('./lib/circleci');

var
  ci = new CircleCI(process.env.CIRCLECI_TOKEN);

if (sub === "me") {
  ci.me()
    .then((respdata) => {
      console.log(respdata);
    }).catch((error) => {
      console.log(error);
    });
}
