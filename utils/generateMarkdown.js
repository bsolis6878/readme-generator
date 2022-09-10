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

# Description
${data.description}

# Table of Contents
${data.contents}

# Steps for Installation
${data.installation}

# Usage Information
${data.usage}

# License
License used for this project: ${data.license}

# Contribution Guidelines
${data.contributing}

# Testing Instructions
${data.test}

# Questions
To view my other projects, feel free to check out my GitHub profile at ${data.username}.
If you have any questions, you can reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
