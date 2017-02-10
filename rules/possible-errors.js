// These rules relate to possible syntax or logic errors in JavaScript code: http://eslint.org/docs/rules/#possible-errors
module.exports = {
    rules: {
        // disallow assignment operators in conditional expressions
        // TODO: reivew, we are doing this in multiple places.
        "no-cond-assign": "off",

        // disallow constant expressions in conditions
        "no-constant-condition": "warn",

        // disallow control characters in regular expressions
        "no-control-regex": "error",

        // disallow the use of debugger
        "no-debugger": "error",

        // disallow duplicate arguments in functions
        "no-dupe-args": "error",

        // disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",

        // disallow a duplicate case label.
        "no-duplicate-case": "error",

        // disallow empty character classes in regular expressions 
        "no-empty-character-class": "warn",

        // disallow empty statements
        "no-empty": "error",
        
        // disallow assigning to the exception in a catch block
        "no-ex-assign": "error",

        // disallow unnecessary boolean casts
        "no-extra-boolean-cast": "warn",

        // disallow unnecessary parentheses (temporarily disabled)
        // TODO: review (we should make this a warning at a later date)
        "no-extra-parens": ["off", "all", {
            conditionalAssign: true,
            nestedBinaryExpressions: true,
            returnAssign: true,
        }],

        // disallow unnecessary semicolons
        "no-extra-semi": "error",

        // disallow overwriting functions written as function declarations
        "no-func-assign": "error",

        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": "error",

        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": "error",

        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "error",

        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": "error",

        // disallow use of Object.prototypes builtins directly
        // TODO: review this (low priority)
        "no-prototype-builtins": "off",

        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "error",

        // disallow sparse arrays
        "no-sparse-arrays": "error",

        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": "error",

        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": "error",

        // disallow return/throw/break/continue inside finally blocks
        "no-unsafe-finally": "error",

        // disallow negating the left operand of relational operators
        "no-unsafe-negation": "error",

        // disallow comparisons with the value NaN
        "use-isnan": "error",

        // ensure that the results of typeof are compared against a valid string
        "valid-typeof": ["error", { requireStringLiterals: true }]
    }
};
