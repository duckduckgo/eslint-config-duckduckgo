module.exports = {
    extends: [
        "./environments",
        "./globals",
        "./rules/jshint/js"
    ].map(require.resolve)
};
