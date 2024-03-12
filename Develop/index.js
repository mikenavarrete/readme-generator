// TODO: Include packages needed for this application

const  inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Provide a description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT","GPL"]
    },
    {
        type:"input",
        name:"installation",
        message:"What command should be run to install dependencies? (e.g., 'npm i')"
    },
    {
        type:"input",
        name:"usage",  
        message:"Provide instructions and examples for usage of the app."
    },
    {
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to your project, provide guidelines for how to do so." 

    },
    {
        type: "input",
        name:  "tests",
        message: "if there are any tests for your project, how do you run them?"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username.",

    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please provide your email address."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return  inquirer.prompt (questions).then(data=>{
        fs.writeFileSync("ReadMe.md", `
#  ${data.title}
## Description
        ${data.description}
## Installation
        ${data.installation}
## Usage
        ${data.usage}
## License
        ${data.license}
## Contributing
        ${data.contributing}
## Tests
        ${data.tests}
## Questions
        if you have additonal questions, email me at  ${data.emailAddress}. View more of my work on Github at https://github.com/${data.githubUsername}
                `)
    })
}

// TODO: Create a function to initialize app
function init() {
writeToFile()
}

// Function call to initialize app
init();



