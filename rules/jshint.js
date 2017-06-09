module.exports = {
        rules: {
            // matches jshint newcap: true
            "new-cap": ["error", { "properties": false }],

            // matches jshint asi: false
            "semi": ["error", "always"],

            // matches jshint multistr: false
            "no-multi-str": "error",

            // matches jshint laxcomma: false
            "comma-style": ["error", "last"],
        }
};
