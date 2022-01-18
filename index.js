// Required classes for employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const inquirer = require('inquirer');
const fs = require('fs');

let employeeDirectory = [];

const managerInput = [{
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'Rick',
    },
    {
        type: 'input',
        message: 'Enter Manager ID Number:',
        name: '112659',
    },
    {
        type: 'input',
        message: 'Enter Manager Email Address:',
        name: 'rick.ansay@gmail.com',
    },
    {
        type: 'input',
        message: 'Enter Office Number',
        name:'35'
    },

]