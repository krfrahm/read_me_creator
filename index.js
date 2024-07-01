const inquirer = require('inquirer');
const fs = require('fs');
const { makeBadge, ValidationError } = require('badge-maker')



inquirer 
.prompt([
    {
        type: 'input',
        message:'What is your project name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Please describe your project. What was your motivation? Why did you build the project? What problem does it solve? What did you learn?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide installation directions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please provide usage instructions',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please provide contribution guidelines',
        name: 'contribution',
      },
      {
        type: 'list',
        message: 'Which license is used on this project?',
        name: 'license',
        choices: ['None', 'Apache-License-2.0', 'GNU-General-Public-Licence-v3.0', 'MIT-License', 'BSD-2-Clause-"simplified"-License', 'BSD_2-Clause_"new"_or_"Revised"_License', 'Boost_Software_License_1.0', 'Creative_Commons_Zero_v1.0_Universal'],
      },
      {
        type: 'input',
        message: 'What is your Git username?',
        name: 'gitName',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ])
    

    .then((answers) => {
        
          
        const readMe = responseReadMe(answers)
        fs.writeFile('readme.md', readMe, err => {
            if(err) { console.error(err) 
            }else {
             console.log('Commit logged!')
    }
    })
    });

    

function responseReadMe (answers) {
    const format = {
        label: 'licence',
        message: `${answers.licence}`,
        color: 'brightgreen',
      }
      
      const svg = makeBadge(format)
      

    return `
    # ${answers.name}

    ## Description
    ${answers.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribution](#contribution)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}
    
    ## Licence
    ${answers.license}

    ## Contribution
    ${answers.contribution}

    ## Badges 
     ![Static Badge] (${svg})

    ## Questions
    If you have additional questions please reference my github account https://github.com/${answers.gitName} or reach out to me by email at ${answers.email}

    `
}

