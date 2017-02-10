// These rules relate to better ways of doing things to help you avoid problems: http://eslint.org/docs/rules/#best-practices
module.exports = {
    rules: {
        // enforce the use of variables within the scope they are defined
        // We may want this someday for ES6 migration path
        "block-scoped-var": "off",
        
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": ["warn", 20],

        // require return statements to either always or never specify values
        // TODO: review this.
        "consistent-return": ["off", { "treatUndefinedAsUnspecified": false }],

        // specify curly brace conventions for all control statements
        "curly": ["error", "multi-line"],

        // enforce consistent newlines before and after dots
        "dot-location": ["error", "property"],

        // enforce dot notation whenever possible
        "dot-notation": "error",

        // disallow lexical declarations in case/default clauses
        "no-case-declarations": "error",

        // disallow else after a return in an if
        "no-else-return": "error",

        // disallow empty functions
        "no-empty-function": "error",

        // disallow empty destructuring patterns
        "no-empty-pattern": "error",

        // disallow null comparisons without type-checking operators
        "no-eq-null": "error",

        // disallow use of eval()
        "no-eval": "error",

        // disallow adding to native types
        "no-extend-native": "error",

        // disallow unnecessary function binding
        "no-extra-bind": "error",

        // disallow fallthrough of case statements
        "no-fallthrough": "error",

        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": "error",

        // disallow reassignments of native objects or read-only globals
        "no-global-assign": ["error", { exceptions: [] }],

        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": "error",

        // disallow unnecessary nested blocks
        "no-lone-blocks": "error",

        // disallow creation of functions within loops
        "no-loop-func": "error",

        // disallow use of octal literals
        "no-octal": "error",

        // disallow the use of the __proto__ property
        "no-proto": "error",

        // disallow reassigning function parameters
        // TOOD: discuss this.
        "no-param-reassign": ["off", { props: false }],

        // disallow declaring the same variable more then once
        "no-redeclare": "error",
        
        // disallow use of assignment in return statement
        // TODO: discuss this.
        "no-return-assign": "off",
        
        // disallow javascript: urls
        "no-script-url": "error",

        // disallow self assignment
        "no-self-assign": "error",
        
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",

        // disallow use of comma operator
        "no-sequences": "error",

        // disallow redundant return statements
        "no-useless-return": "error",

        // disallow use of the with statement
        "no-with": "error",

        // enforce the consistent use of the radix argument when using parseInt()
        "radix": "error",

        // require var declarations be placed at the top of their containing scope
        // TODO: we should take this seriously for ES6 migration path
        "vars-on-top": "off",

        // require or disallow Yoda conditions
        "yoda": "error"
    }
};
