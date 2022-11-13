// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const helper = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = ["Enter the Project Title", "Enter the Project Description" 
, "Enter the Table of Contents separating with space","Enter the Installation Instruction"
, "Enter the Usage Information", "Enter the Credits Instruction"
, "Choose a license", "Enter the Contribution Guidelines"
, "Enter the Tests Instruction", "Enter GitHub username"
, "Enter your email address"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if(fs.existsSync("./"+fileName)){
        fs.appendFile(fileName, helper.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('File writing successful!'));
    }else {
        fs.writeFile(fileName, helper.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('File writing successful!'));
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'contents',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usageInfo'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'creditInfo',
        },
        {
            type: 'checkbox',
            message: questions[6],
            choices: ["None", "MIT", "Apache 2", "GPL"],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'contributionInfo',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'testInfo',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[10],
            name: 'email',
        }
    ])
    .then((response) => {
        writeToFile("README.md", response);
    });
}

// Function call to initialize app
init();