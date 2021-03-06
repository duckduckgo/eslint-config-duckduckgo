var bestPractices = require('../rules/best-practices.js');
var possibleErrors = require('../rules/possible-errors.js');
var variables = require('../rules/variables.js');
var stylisticIssues = require('../rules/stylistic-issues.js');

function listRules(heading, category) {
    var output = `### ${heading}:\n`;

    for (var rule in category.rules) {
        var errorType = category.rules[rule];

        if (typeof (category.rules[rule]) !== 'string') {
            errorType = category.rules[rule][0];
        }

        output += `* [${rule}](https://eslint.org/docs/rules/${rule})\n`;
    }

    return output;
}

console.log(listRules('Best Practices', bestPractices));
console.log(listRules('Possible Errors', possibleErrors));
console.log(listRules('Stylistic Issues', stylisticIssues));
console.log(listRules('Variables', variables));
