// These rules relate to variable declarations: http://eslint.org/docs/rules/#variables
module.exports = {
    rules: {
        // disallow deleting variables
        "no-delete-var": "error",
        
        // disallow labels that share a name with a variable
        "no-label-var": "error",

        // disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow-restricted-names": "error",
        
        // disallow initializing variables to undefined
        "no-undef-init": "error",

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        "no-undef": "error",

        // disallow the use of undefined as an identifier
        "no-undefined": "error",

        // disallow unused variables
        "no-unused-vars": ["error", { "vars": "local", "args": "after-used", "argsIgnorePattern": "e|ops|attrs" }],

        // disallow the use of variables before they are defined
        "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }]
    }
};
