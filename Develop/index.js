const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const generatrMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
"What is the title of your application?",
"Write a brief description of your application.",
"Give instructions on how properly install your application.",
"Describe how to use your application.",
"Provide some tests for your application and some examples on how to run them.",
"Who are the contributers to your application?",
"Select a license for your code",
"How can users submit questions to you about the application?"
];

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
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
            name: "tests",
            message: questions[4]
        },
        {
            type: "input",
            name: "contribute",
            message: questions[5]
        },
        {
            type: "list",
            name: "license",
            message: questions[6],
            choices: [
                "MIT License",
                "Apache License",
                "GPL License",
                "Public Domain (Unlicense)"
            ]
        },
        {
            type: "input",
            name: "questions",
            message: questions[7]
        }
    ]).then(function(answers) {

        const README = generatrMarkdown(answers)

        return writeToFile("README.md", README)
    })
    .then(function() {
        console.log("Successfully wrote README")
    })
    .catch(function(err) {
        console.log(err)
    })
}

// function call to initialize program
init();
