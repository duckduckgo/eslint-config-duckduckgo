module.exports = {
    extends: [
        './environments',
        './globals',
        './rules/best-practices',
        './rules/possible-errors',
        './rules/stylistic-issues',
        './rules/variables'
    ].map(require.resolve)
};
