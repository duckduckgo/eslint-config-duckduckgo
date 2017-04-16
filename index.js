module.exports = {
    extends: [
        "./environments",
        "./globals",
        "./rules/jshint.js",
        "./rules/possible-errors.js",
        "./rules/best-practices.js"
    ].map(require.resolve)
};
