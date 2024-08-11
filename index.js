// TODO: Include packages needed for this application
import inquirer from 'inquirer';
console.log('hello whirled');
import fs from 'fs';
import { writeFile } from 'fs/promises';
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        // {
         // type: 'input',
        //     message: 'Please enter your project description',
        //     name: 'description',
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your project installation instructions',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your project usage information',
        //     name: 'usage',
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your contribution guidelines',
        //     name: 'contribution',
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your test instructions',
        //     name: 'test',
        // },
        // {
        //     type: 'list',
        //     message: 'Select your license',
        //     choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your GitHub Username',
        //     name: 'Username',
        // },
        // {
        //     type: 'input',
        //     message: 'Please enter your email address',
        //     name: 'email',
        // },
        ])
}
// TODO: Create a function to write README file
const generateREADME = ({ title, description }) =>
    `# <h3>${title}</h3> 

## License Badge

## Description

<${description}>

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
`
;

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();
