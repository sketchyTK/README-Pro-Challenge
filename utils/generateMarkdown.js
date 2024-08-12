// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  let licenseShield = "";

  if (license === "None") {
    licenseShield = "";
  }
    if (license === "MIT") {
      licenseShield = "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } 
    if (license === "Apache 2.0") {
      licenseShield = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
     } 
     if (license === "GNU GPL v3") {
    licenseShield = "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } 
  
  return licenseShield;  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "GNU GPL v3":
      licenseLink = "https://opensource.org/licenses/gpl-3.0";
      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "Please View " + renderLicenseLink(license) + " for more information on this license."
  }
  return licenseSection;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge()
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation<a id="installation"></a>

${data.installation}

## Usage<a id="usage"></a>

${data.usage}

## Contributing <a id="contributions"></a>

${data.contribution}

## Tests<a id="tests"></a>

${data.test}

## Questions<a id="questions"></a>

Here is a link to my Github Profile: <a href="https://github.com/${data.username}">${data.username}</a>

Here is my email address: <a href="mailto:${data.email}">${data.email}</a>

## License
${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
