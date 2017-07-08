module.exports = {
    extends: [
        "./environments",
        "./globals",
        "./rules/possible-errors.js",
        "./rules/best-practices.js",
        "./rules/variables.js",
        "./rules/stylistic-issues.js"
    ].map(require.resolve)
};
