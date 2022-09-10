// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a valid title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a valid description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Provide a table of contents.',
            validate: contentsInput => {
                if (contentsInput) {
                    return true;
                } else {
                    console.log('Please enter a valid table of contents.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide steps for installation.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter valid steps for installation.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter valid usage information.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select license used.',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contribution guidelines.',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter valid contribution guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing instructions.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter valid testing instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Provide your GitHub username.',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide an email which you can be reached at.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email you may be reached at.');
                    return false;
                }
            }
        }        
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File created in dist folder!")
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(markdown => {
        return generateMarkdown(markdown);
    })
    .then(createFile => {
        return writeToFile(createFile);
    })
}

// Function call to initialize app
init();