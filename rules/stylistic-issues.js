// These rules relate to style guidelines, and are therefore quite subjective: http://eslint.org/docs/rules/#stylistic-issues
module.exports = {
    rules: {
        // enforce spacing inside array brackets
        "array-bracket-spacing": ["error", "never"],

        // enforce consistent spacing inside single-line blocks
        "block-spacing": ["error", "always"],

        // enforce consistent brace style for blocks
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],

        // enforce camelcase naming convention
        "camelcase": ["warn", { properties: "never" }], // we cannot make this an error condition yet

        // require or disallow trailing commas
        "comma-dangle": ["error", "never"],

        // enforce consistent comma style
        "comma-style": ["error", "last"],

        // require or disallow use of semicolons instead of ASI
        "semi": ["error", "always"],

        // enforce consistent spacing before and after commas
        "comma-spacing": ["error", { before: false, after: true }],

        /*

        // enforce consistent spacing inside computed property brackets
        "computed-property-spacing": ["error", "never"],

        // enforce consistent naming when capturing the current execution context
        "consistent-this": ["error", "self"],

        // require or disallow newline at the end of files
        "eol-last": ["error", "always"],

        // require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],

        // require or disallow named function expressions
        // TODO: discuss this
        "func-names": "off", 

        // enforce the consistent use of either function declarations or expressions
        // TODO: discuss this (and pick a style)
        "func-style": ["off", "declaration"],

        // enforce minimum and maximum identifier lengths
        // TODO: agree on a max length
        "id-length": ["warn", { min: 1, max: 30 }], 

        // enforce consistent indentation
        "indent": ["error", 4], 

        // enforce consistent spacing between keys and values in object literal properties
        // TODO: it appears we have leaned towards this style already { "foo" : 42 };
        "key-spacing": ["warn", { beforeColon: false, afterColon: true }],

        // enforce consistent spacing before and after keywords
        "keyword-spacing": ["warn", {
            before: true,
            after: true
        }],

        // enforce position of line comments
        // TODO: do we want this?
        "line-comment-position": "off",

        // enforce consistent linebreak style
        "linebreak-style": ["error", "unix"],

        // require empty lines around comments
        // TODO: do we want this?
        "lines-around-comment": "off", 

        // enforce a maximum line length
        // TODO: configure
        "max-len": ["error", 120, 4, {}],

        // require constructor names to begin with a capital letter
        // TODO: review
        "new-cap": "off",

        // require parentheses when invoking a constructor with no arguments
        "new-parens": "error",

        // require or disallow an empty line after variable declarations
        // TODO: do we want this?
        "newline-after-var": "off",

        // require an empty line before return statements
        // TODO: do we want this?
        "newline-before-return": "off",

        // require a newline after each call in a method chain
        "newline-per-chained-call": "error",

        // disallow Array constructors
        "no-array-constructor": "error",

        // disallow bitwise operators
        "no-bitwise": ["error", { "int32Hint": true }],

        // disallow continue statements
        "no-continue": "error",
        
        // disallow if statements as the only statement in else blocks
        "no-lonely-if": "error",

        // disallow mixed binary operators 
        "no-mixed-operators": ["error", {
            groups: [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            allowSamePrecedence: true
        }],

        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",

        // disallow multiple empty lines
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],

        // disallow nested ternary expressions
        // TODO: review
        "no-nested-ternary": "error",

        // disallow use of the Object constructor
        "no-new-object": "error",

        // disallow use of unary operators, ++ and --
        // TODO: review, we probably don't want this
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],

        // disallow specified syntax
        // TODO: add ES6 features here?
        "no-restricted-syntax": ["error", "WithStatement"],

        // disallow space between function identifier and application
        "no-spaced-func": "error",

        // disallow all tabs
        "no-tabs": "error",

        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "off",

        // disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": "error",

        // disallow whitespace before properties
        "no-whitespace-before-property": "error",

        // enforce consistent line breaks inside braces
        "object-curly-newline": ["error", { "minProperties": 1 }],

        // enforce consistent spacing inside braces 
        "object-curly-spacing": ["error", "always"],

        // enforce placing object properties on separate lines
        "object-property-newline": ["error", {
            allowMultiplePropertiesPerLine: true,
        }],

        // require or disallow newlines around variable declarations
        "one-var-declaration-per-line": ["error", "always"],

        // enforce variables to be declared either together or separately in functions
        "one-var": ["error", "always"],

        // equire or disallow assignment operator shorthand where possible
        "operator-assignment": ["error", "always"],

        // require or disallow padding within blocks
        "padded-blocks": ["error", "never"],

        // require quotes around object literal property names
        // TODO: review
        "quote-props": ["off", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

        // enforce the consistent use of either backticks, double, or single quotes
        "quotes": ["warn", "double", { avoidEscape: true }],

        // enforce consistent spacing before and after semicolons
        "semi-spacing": ["error", { before: false, after: true }],

        // enforce consistent spacing before blocks
        // TODO: would like to upgrade to an error
        "space-before-blocks": "warn",

        // enforce consistent spacing before function definition opening parenthesis
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "ignore"
        }],

        // enforce consistent spacing inside parentheses
        "space-in-parens": ["error", "never"],

        // require spacing around infix operators
        "space-infix-ops": ["error", { "int32Hint": false }],

        // enforce consistent spacing before or after unary operators
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false,
            "overrides": {}
        }],

        // enforce consistent spacing after the // or /* in a comment
        "spaced-comment": ["error", "always", {
            "line": {
                "markers": ["/"],
                "exceptions": ["-", "+"]
            },
            "block": {
                "markers": ["!"],
                "exceptions": ["*"],
                "balanced": true
            }
        }]
        */
    }
};
