
import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.yellowBright("Student application form"))
let answer = await inquirer.prompt([
    {
    name: "student",
    type: "string",
    message: chalk.redBright("Student Name")
    },
    {
    name: "fathername",
    type: "string",
    message: chalk.redBright("Father Name")
    },
    {
    name: "Class",
    type: "number|string",
    message: chalk.redBright("Qualification")
    },
    {
    name: "Gender",
    type: "list",
    message: chalk.redBright("Gender"),
    choices: ["Male","Female"]
    },
    {
    name: "Phone no",
    type: "number",
    message: chalk.redBright ("Phone no")
    },
    {
    name: "Email",
    type: "string|number",
    message: chalk.redBright("Email Address")
    },
    {
    name: "Password",
    type: "number|string",
    message: chalk.redBright("Password")
    },
    {
    name: "Cources",
    type: "list",
    message: chalk.redBright("Select you cource"),
    choices: ["CIT","Graphic designing","Digital marketing","Freelancing","Web development"]
    },
    {
    name: "Amount",
    type: "list",
    message: chalk.redBright("Select Amount"),
    choices: [1000,2000,3000]
    },
]);
console.log(chalk.yellowBright("Received application Successfully"))
