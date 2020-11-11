var inquirer = require("inquirer");
var fs = require ("fs");
var filename = 'README.md';
var generateMarkdown = require('./markdown');
var email='';

/*
inquirer
.prompt ([
    {
    type: "confirm",
    message: "Would you like to provide an email for questions?",
    name: "yn"
    }
])

    inquirer
    .prompt ([
        {
        type: "input",
        message: "Enter email address: ",
        name: "email"
        }
    ])
    .then( function (emailResponse) {
            email = emailResponse.email;
            console.log (email);
    })

   console.log ("give email");
});
    */

inquirer
.prompt ([
    {
        type: "input",
        message: "What is github user name?",
        name: "gitName"
    },
    {
        type: "input",
        message: "Enter the title of your project: ",
        name: "title"
    },    
    {
        type: "input",
        message: "Enter a description of your project: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation proceedures: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter an usage example: ",
        name: "usage"
    },
    {
        type: "list",
        message: "Enter license: ",
        choices: ["GT","MIT","UF"],
        default: "GT",
        name: "license"
    },
    {
        type: "input",
        message: "Enter Contributors: ",
        name: "contributor"
    },
    {
        type: "input",
        message: "Enter tests :",
        name: "test"
    },
    {
        type: "input",
        message: "Enter questions if any: ",
        name: "question"
    },
    {
        type: "input",
        message: "Enter email if you would like to: ",
        name: "email"
    },
])

.then(function (response) {
    fs.writeFile(filename, generateMarkdown(response), function(err) {
        if (err) {
            return console.log(err);
        }
    });

    console.log("Success!");

})