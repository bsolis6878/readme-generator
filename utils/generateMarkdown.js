// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

### Description
${data.description}

### Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution Guidelines](#contribution)
5. [Testing Instructions](#testing)
6. [Questions](#questions)

<a name="installation"></a>
### Steps for Installation
${data.installation}

<a name="usage"></a>
### Usage Information
${data.usage}

<a name="license"></a>
### License
License used for this project: ${data.license}

<a name="contribution"></a>
### Contribution Guidelines
${data.contributing}

<a name="testing"></a>
### Testing Instructions
${data.test}

<a name="questions"></a>
### Questions
To view my other projects, click on <a href="https://github.com/${data.username}" target="_blank">this link here</a> to view my GitHub profile.</br>
If you have any questions regarding the application, send me an email at ${data.email}.
`;
}

module.exports = generateMarkdown;
