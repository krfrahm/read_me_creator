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

    - [Installation](##installation)
    - [Usage](##usage)
    - [Credits](##credits)
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

// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <meta name="Description" content="Enter your description here" />
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

//   <title>${answers.name}</title>
// </head>

// <body>
//     <h1>${answers.name}'s Very exciting Profile</h1>
//     <div>
//         <p>git username ${answers.userName}</p>
//         <p>favorite color ${answers.color}</p>
//         <p>age ${answers.age}</p>
//     </div>
// </body>
// </html>  