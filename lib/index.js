/**
 * @fileoverview Enhanced linting for linebreak styles based on OS and SCM configuration
 * @author Brian LaPierre
 */
"use strict";

const { getPlatform } = require('./utils')
const native = require('./rules/native')(getPlatform);

// import all rules in lib/rules
//Look into getting each rule indivivually and injecting dependencies like getPlatform into them 
module.exports.rules = {
 native
}


