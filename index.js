const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project"
    },
    {
        type: "input",
        name: "content",
        message: "Provide a table of contents separated by commas"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation details"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instruction of usage"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license from the following options",
        choices: [
            "MIT",
            "Unlicensed",
        ]
    },
    {
        type:"input",
        name: "contributing",
        message: "How can others contribute?"
    },
    {
        type:"input",
        name: "tests",
        message: "Run tests"
    },
    {
        type:"input",
        name: "question1",
        message: "What is your Github username?"
    },
    {
        type:"input",
        name: "question2",
        message: "What is your email address?"
    },
]