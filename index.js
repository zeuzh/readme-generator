// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMardown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the steps to get this application running?"
    },
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does this application need",
        choices: ["MIT", "Apache", "None"]
    },
    {
        type: "input",
        name: "tests",
        message: "How did you test this application"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) console.log(err)
        console.log("README generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();