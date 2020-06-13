/**
 * @fileoverview Determine linebreak-style based on host OS
 * @author Brian LaPierre
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
                                                //Mock getPlatform
var rule = require("../../../lib/rules/native")(()=> process.platform === 'win32' ? 'windows' : 'unix'),

    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

const validLinebreak = process.platform === 'win32' ? '\r\n' : '\n';
const invalidLinebreak = process.platform === 'win32' ? '\n' : '\r\n';

const expectedLinebreakAssertion = process.platform === 'win32' ? 'CRLF' : 'LF'
const foundLinebreakAssertion = process.platform === 'win32' ? 'LF' : 'CRLF'


ruleTester.run("native", rule, {

    valid: [
        
            {
                code: `var a = 'a'; // ${validLinebreak}`
            }
        ],

    invalid: [
        {
            code: `var a = 'a'; // ${invalidLinebreak}`,
            errors: [{
                message: `Expected linebreaks to be '${expectedLinebreakAssertion}' but found '${foundLinebreakAssertion}'.`,
                type: "Program"
            }]
        }
    ]
});
