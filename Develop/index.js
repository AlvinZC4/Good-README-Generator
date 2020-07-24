const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

// array of questions for user
const questions = [
"What is the title of your application?",
"Write a brief description of your application.",
"Give instructions on how properly install your application.",
"Describe how to use your application.",
"Who are the contributers to your application?",
"Provide some tests for your application and some examples on how to run them."
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "install",
            message: questions[2]
        },
        {
            type: "input",
            name: "usage",
            message: questions[3]
        },
        {
            type: "input",
            name: "contribute",
            message: questions[4]
        },
        {
            type: "input",
            name: "tests",
            message: questions[5]
        }
    ])
}

// function call to initialize program
init();
