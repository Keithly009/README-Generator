// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// creates a function to generate a markdown for the Readme 
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: "What is the purpose of this application?", 
        name: "information",
    },
    {
        type: 'input', 
        message: "What do you want your README file to be named?", 
        name: "fileName",
    },
    {
        type: 'input', 
        message: "What is your github Username?", 
        name: "questions",
    },
    {
        type: "input", 
        message: "What is the title of your project?", 
        name: "title"
    },
    {
        type: 'input', 
        message: "What is your email address?", 
        name: "question",
    },
    {
        type: 'input', 
        message: "What are other ways that we can reach you?", 
        name: "morequestions",
    },
    {
        type: 'input', 
        message: "What is the description of your project?", 
        name: "description",
    },
    {
        type: 'list', 
        message: "What kind of license will you use for your project?", 
        name: "license",
        choices: [
            {name: 'MIT', value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}, 
            {name: 'ISC', value:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
            {name: 'Boost', value:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
        ]
    },
    {
        type: 'input', 
        message: "How do I test this application or see the results?", 
        name: "instructions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data); 
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(Response => { 
    const md = generateMarkdown(Response)
    writeToFile(`${Response.fileName}.md`, md)
   })  
}

// Function call to initialize app
init();
