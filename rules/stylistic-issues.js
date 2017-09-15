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
        "camelcase": ["error", { properties: "never" }], // we cannot make this an error condition yet

        // require or disallow trailing commas
        "comma-dangle": ["error", "never"],

        // enforce consistent comma style
        "comma-style": ["error", "last"],

        // require or disallow use of semicolons instead of ASI
        "semi": ["error", "always"],

        // enforce consistent spacing before and after commas
        "comma-spacing": ["error", { before: false, after: true }],

        // enforce consistent spacing inside computed property brackets
        "computed-property-spacing": ["error", "never"],

        // enforce consistent naming when capturing the current execution context
        "consistent-this": ["error", "self"],

        // require or disallow newline at the end of files
        "eol-last": ["error", "always"],

        // require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": ["error", "never"],
        
        // require parentheses when invoking a constructor with no arguments
        "new-parens": "error",

        // require a newline after each call in a method chain
        "newline-per-chained-call": "error",

        // disallow Array constructors
        "no-array-constructor": "error",

        // disallow bitwise operators
        "no-bitwise": ["error", { "int32Hint": true }],

        // disallow if statements as the only statement in else blocks
        "no-lonely-if": "error",
        
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
        }],

        // enforce consistent spacing before or after unary operators
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false,
            "overrides": {}
        }],
        
        // enforce consistent linebreak style
        "linebreak-style": ["error", "unix"],

        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",

        // enforce consistent spacing before function definition opening parenthesis
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "ignore"
        }],

        // enforce consistent spacing inside parentheses
        "space-in-parens": ["error", "never"],

        // require spacing around infix operators
        "space-infix-ops": ["error", { "int32Hint": false }],

        // enforce consistent spacing before and after semicolons
        "semi-spacing": ["error", { before: false, after: true }],

        // disallow multiple empty lines
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],

        // disallow use of the Object constructor
        "no-new-object": "error",

        // disallow all tabs
        "no-tabs": "error",

        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "off",

        // disallow space between function identifier and application
        "no-spaced-func": "error",

        // equire or disallow assignment operator shorthand where possible
        "operator-assignment": ["error", "always"],

        // require or disallow newlines around variable declarations
        "one-var-declaration-per-line": ["error", "always"],

        // disallow whitespace before properties
        "no-whitespace-before-property": "error",

        // disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": "error",

        // enforce consistent spacing inside braces 
        "object-curly-spacing": ["error", "always"],

        // enforce placing object properties on separate lines
        "object-property-newline": ["error", {
            allowMultiplePropertiesPerLine: true,
        }],

        // disallow continue statements
        "no-continue": "error",

        // enforce consistent spacing between keys and values in object literal properties
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],

        // enforce consistent spacing before blocks
        "space-before-blocks": "error",

        // enforce consistent spacing before and after keywords
        "keyword-spacing": ["error", {
            before: true,
            after: true
        }],
        
        // enforce a maximum line length
        "max-len": ["error", 100, 4, {
            "ignoreStrings": true 
        }],

        // require constructor names to begin with a capital letter
        "new-cap": ["error", { 
            "newIsCap": true,
            "capIsNew": false
        }],

        // disallow specified syntax
        // TODO: add ES6 keywords here?
        "no-restricted-syntax": ["error", 
            {
                "selector": "WithStatement",
                "message": "with violates lexical scope, making program analysis (e.g. for security) hard to infeasible."
            }
        ],

        // disallow use of unary operators, ++ and --
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],

        // disallow nested ternary expressions
        "no-nested-ternary": "error",

        // require or disallow padding within blocks
        "padded-blocks": ["error", "never"],

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

        // require quotes around object literal property names
        "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

        // enforce a maximum depth that blocks can be nested
        "max-depth": ["error", 4],

        // enforce a maximum number of parameters in function definitions
        "max-params": ["error", 3],

        // Require or disallow padding lines between statements 
        "padding-line-between-statements": ["error", 
            { blankLine: "always", prev: ["return", "var"], next: ["*"] },
            { blankLine: "any", prev: ["return", "var"], next: ["var"] },
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "any",    prev: "directive", next: "directive" }
        ]

        /*         
        // enforce variables to be declared either together or separately in functions
        // TODO: we need to revisit this once we start using let from ES6.
        "one-var": ["error", "always"],

        // enforce consistent line breaks inside braces
        // TODO: revisit once we've upgraded to ESLint 4.x.
        "object-curly-newline": ["error", { "minProperties": 1 }],

        // require or disallow named function expressions
        // TODO: discuss this
        "func-names": "off", 

        // enforce the consistent use of either function declarations or expressions
        // TODO: discuss this (and pick a style)
        "func-style": ["off", "declaration"],

        // enforce position of line comments
        // TODO: do we want this?
        "line-comment-position": "off",

        // require empty lines around comments
        // TODO: do we want this?
        "lines-around-comment": "off", 

        // enforce the consistent use of either backticks, double, or single quotes
        // TODO: wait until ES6 migration path.
        "quotes": ["warn", "double", { avoidEscape: true }],
        */
    }
};
