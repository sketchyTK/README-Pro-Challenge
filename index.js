// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const licenses = ['None', 'MIT', 'Apache 2.0', 'GNU GPL v3']
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
         type: 'input',
            message: 'Please enter your project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter your project installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter your project usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter your contribution guidelines',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please enter your test instructions',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Select your license',
            choices: licenses,
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub Username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email',
        },
];
// TODO: Create a function to write README file
function writeToFile(data) { 
    const fileName = "README.md";

    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log(fileName + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
