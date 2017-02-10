module.exports = {
        rules: {
            // matches jshint curly: true
            "curly": ["error", "all"],

            // matches jshint newcap: true
            "new-cap": ["error", { "properties": false }],

            // matches jshint asi: false
            "semi": ["error", "always"],

            // matches jshint multistr: false
            "no-multi-str": "error",

            // matches jshint debug: false
            "no-debugger": "error",

            // matches jshint boss: true
            "no-cond-assign": ["off", "except-parens"],

            // matches jshint evil: false
            "no-eval": "error",

            // matches jshint proto: false
            "no-proto": "error",

            // matches jshint scripturl: false
            "no-script-url": "error",

            // matches jshint sub: false
            "dot-notation": ["error", { "allowKeywords": false }],

            // matches jshint laxcomma: false
            "comma-style": ["error", "last"],

            // matches jshint validthis: false
            "no-invalid-this": "error",

            // matches jshint withstmt: false
            "no-with": "error",

            // matches jshint eqnull: false
            "no-eq-null": "error",

            // matches jshint loopfunc: false
            "no-loop-func": "error"
        }
};
