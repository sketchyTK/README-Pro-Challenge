// TODO: Include packages needed for this application
import inquirer from 'inquirer';
console.log('hello whirled');
import { writeFile } from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = ['What is your project title?', 'Select your license'];
const [title, license] = questions;

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
        {
            type: 'list',
            message: 'Select your license',
            choices: ["Apache 2.0", 'BSD 3 Clause', 'MIT', 'PostgreSQL', 'No License'],
            name: 'license',
        },
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

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => writeFile('README.md', generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
