/**
 * @fileoverview Determine linebreak-style based on host OS
 * @author Brian LaPierre
 */
"use strict";

const linebreakStyle = require('../../node_modules/eslint/lib/rules/linebreak-style.js');
const getPlatformDef = require('../utils').getPlatform;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = (getPlatform = getPlatformDef) =>{return {
    meta: {
        docs: {
            description: "Determine linebreak-style based on host OS",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: "whitespace",  // or "code" or "whitespace"
        schema: [
        ],
        messages: linebreakStyle.meta.messages
    },

    create: function(context) {

        const options = [];
        options[0] = getPlatform();
        const newContext = { ...context,options}
        newContext.getSourceCode = context.getSourceCode;

        return linebreakStyle.create(newContext);

    }
}};
