var bestPractices = require('../rules/best-practices.js');

var output = `###Best Practices:###\n`;

for (var rule in bestPractices.rules) {
    var errorType = bestPractices.rules[rule];

    if (typeof (bestPractices.rules[rule]) !== 'string') {
        errorType = bestPractices.rules[rule][0];
    }

    output += `* [${rule}](https://eslint.org/docs/rules/${rule})\n`;
}

console.log(output);
