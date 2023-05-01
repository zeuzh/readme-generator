// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == "Apache") {
    return `## License
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
  }
  if (data.license == "MIT") {
    return `## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
  }
  if (data.license == "None") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Installaion
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
${renderLicenseLink(data)}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
