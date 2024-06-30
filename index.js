const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
.prompt([
    {
        type: 'input',
        message:'What is your project name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your motivation for this project?',
        name: 'descriptionOne',
      },
      {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'descriptionTwo',
      },
      {
        type: 'input',
        message: 'What is your age?',
        name: 'age',
      },
    ])
    .then((answers) => {
        const readMe = responseReadMe(answers)
        fs.writeFile('readme.md', html, err => {
            if(err) { console.error(err) 
            }else {
             console.log('Commit logged!')
    }
    })
    });


function responseReadMe (answers) {
    return `
   # ${answers.name}

   ## Description


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