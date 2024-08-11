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
        ])
}
// TODO: Create a function to write README file
const generateREADME = ({ title, description }) =>
    `# <${title}> 

## Description

<${description}>

## Table of Contents
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
