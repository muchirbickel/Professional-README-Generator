const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  if(license == 'MIT'){
    badge = '![GitHub](https://img.shields.io/github/license/SaadYousafi87/Node-CLI)';
  }else if(license == 'Apache 2'){
    badge = '![Apache 2](https://img.shields.io/github/hexpm/l/:packageName';
  }else if(license == 'GPL'){
    badge = '![Eclipse Marketpalce](https://img.shields.io/github/eclipse-marketplace/l/:name';
  }else if(license == 'None'){
    badge = " ";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var str = data.contents.split(" ");
  var username = `[${data.username}](https://github.com/SaadYousafi87)`;
  var b = renderLicenseBadge(data.license);
  return `# ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [${str[0]}](#installation)\n
  - [${str[1]}](#usage)\n
  - [${str[2]}](#credits)\n
  - [${str[3]}](#license)\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usageInfo}\n
  ## Credits\n
  ${data.creditInfo}\n
  ## License\n
  ${b} Please refer to the LICENSE in the repo\n
  ## Contribution\n
  ${data.contributionInfo}\n
  ## Test\n
  ${data.testInfo}\n
  ## Questions\n
  click ${username} to visit repository if there is any question email me at ${data.email}`;
}

module.exports = {generateMarkdown, renderLicenseSection};