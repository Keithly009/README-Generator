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

  ${data.license ? data.license : ''}

##Table of Contents <br /> 
[Description](#description) <br />
[Usage-Information](#usage-information) <br />
[Testing-Instructions](#testing-instructions) <br />
[Questions](#questions) <br /> 

##Description <br /> 
${data.description}

##Usage-Information <br />
${data.information} 

##Testing-Instructions <br />
${data.instructions} 


##Questions <br />
My email is "${data.question}" 
With additional questions you can reach me using: "${data.morequestions}" <br />
My github username is "${data.questions}"<br />
`; 
}

module.exports = generateMarkdown;
