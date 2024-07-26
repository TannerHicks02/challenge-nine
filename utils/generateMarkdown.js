function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'GPL 3.0':
        return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
      default:
        return '';
    }
  }
  
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
        return 'https://opensource.org/licenses/GPL-3.0';
      default:
        return '';
    }
  }
  
  function renderLicenseSection(license) {
    if (license === 'None') return '';
    return `## License
    
  This project is licensed under the ${license} License. For more details, see [${renderLicenseLink(license)}].`;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about the project, please reach out to me on GitHub at [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;