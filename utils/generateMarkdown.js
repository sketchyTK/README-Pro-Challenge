// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const licenseType = license[0]
  let licenseShield = " "
  if (licenseType === "Apache 2.0") {
    licenseShield = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  if (licenseType === "No License") {" "}
  return licenseShield  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = license[0]
//   let shieldLink = " "
//   if (licenseLink === "Apache 2.0") {
//     shieldLink = 'https://opensource.org/licenses/Apache-2.0'
//   }
//   if (licenseLink === "No License") { " " }
//   return shieldLink
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge()
  return `# ${data.title}

## License Badge
${data.licenseType}. ${licenseShield(data)}
## Description



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation<a id="installation"></a>


## Usage<a id="usage"></a>


## Contributing <a id="contributions"></a>


## Tests<a id="tests"></a>


## Questions<a id="questions"></a>

Here is a link to my Github Profile: <a href="#">URL Here</a>

Here is my email address: <a href="mailto:#">Email Address Here</a>

## License
<a id="license"></a>
`;
}

export default generateMarkdown;
