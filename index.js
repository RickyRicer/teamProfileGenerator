// Required classes for employees
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template.js');


const inquirer = require('inquirer');
const fs = require('fs');

let employeeDirectory = [];

const managerInput = [{
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter Manager ID Number:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter Manager Email Address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter Office Number',
        name: 'officeNumber',
        },

];

const internInput = [{
    type: 'input',
    message: 'What is the name of the Intern?',
    name: 'name',
},
{
    type: 'input',
    message: 'Enter Intern ID Number:',
    name: 'id',
},
{
    type: 'input',
    message: 'Enter Intern Email Address:',
    name: 'email',
},
{
    type: 'input',
    message: 'Enter Intern School Name:',
    name: 'schoolName',
    },

];

const engineerInput = [{
    type: 'input',
    message: 'What is the name of the Engineer?',
    name: 'name',
},
{
    type: 'input',
    message: 'Enter Engineer ID Number:',
    name: 'id',
},
{
    type: 'input',
    message: 'Enter Engineer Email Address:',
    name: 'email',
},
{
    type: 'input',
    message: 'Enter Engineer Github ID:',
    name: 'githubId',
    },

];

const employeeInput = [{
    type: 'list',
    message: 'What type of employee are you adding?',
    name: 'employeeChoice',
    choices: [
        'Intern',
        'Engineer',
        'Done with adding employees'
    ]
}];

function createManager(){
    inquirer.prompt(managerInput).then((res) => {
        let manager = new Manager(
            res.name,
            res.id,
            res.email,
            res.officeNumber,
        )
    
    employeeDirectory.push(manager);
    addEmployees();
});
};

function addEmployees() {
    inquirer.prompt(employeeInput).then((res) => {
        switch (res.employeeChoice){
            case 'Intern':
                createIntern();
                break;
            case 'Engineer':
                createEngineer();
                break;
            default:
                generateTeam();
        }
    });
};

function createIntern(){
    inquirer.prompt(internInput).then((res) => {
        let intern = new Intern(
            res.name,
            res.id,
            res.email,
            res.schoolName,
        )
    employeeDirectory.push(intern);
    addEmployees();
});
};

function createEngineer(){
    inquirer.prompt(engineerInput).then((res) => {
        let engineer = new Engineer(
            res.name,
            res.id,
            res.email,
            res.githubId,
        )
    employeeDirectory.push(engineer);
    addEmployees();
});
};

function generateTeam(){
    fs.writeFileSync('dist/myteam.html', generateHTML(employeeDirectory), 'utf8');
};

createManager ();

