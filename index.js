const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const questions = [
    {
        type:"input",
        name: "badge",
        message: "Enter your badge code"
    },

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
        type: "input",
        name: "contributing",
        message: "How can others contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "Run tests"
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your Github URL?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]

inquirer
    .prompt(questions).then(response =>{

        fs.appendFileSync("./example-README.md", ("\n" + response.badge) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("#" + response.title) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Description" + '\n' + response.description) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Table of Contents" + '\n' + response.content) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Installation" + '\n' + response.installation) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Usage" + '\n' + response.usage) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## License" + '\n' + response.license) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Contributing" + '\n' + response.contributing), function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Tests" + '\n' + response.tests) + '\n', function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

        fs.appendFileSync("./example-README.md", ("## Questions" + '\n' + response.githubUserName + '\n' + response.email), function(error) {
            if (error){
                return console.log(error);
            }
            console.log("success!")
        });

    });