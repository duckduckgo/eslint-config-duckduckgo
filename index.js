module.exports = {
    extends: [
        "./environments",
        "./globals",
        "./rules/best-practices"
    ].map(require.resolve)
};
