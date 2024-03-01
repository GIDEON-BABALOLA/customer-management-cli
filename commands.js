#!/usr/bin/env node
const path = require("path")
const  inquirer = require("inquirer")
const { Command } = require('commander');
const program = new Command();
const {
addCustomer,
findCustomer,
updateCustomer,
deleteCustomer,
findAllCustomers
} = require(path.join(__dirname, "index.js"))
// Customer questions
const questions = [
    {
        type: "input",
        name: "firstname", // Provide a name for the question
        message: "Customer First Name?",
      },
      {
        type: "input",
        name: "lastname", // Provide a name for the question
        message: "Customer Last Name?",
      },
      {
        type: "input",
        name: "mobile", // Provide a phone number for the question
        message: "Customer Phone Number?",
      },
      {
        type: "input",
        name: "email", // Provide an Email Address for the question
        message: "Customer Email Address?",
      }
  ]
program
  .name('customer-management-cli')
  .description('A simple CRUD Application Command Line Interface')
  .version('1.0.0')
//   program
// .command("add  <firstname> <lastname> <phone> <email>")
// .alias("a")
// .description("Add a customer")
// .action(() => {
// inquirer.prompt(questions).then((answers) => {
// console.log(answers); //The answers will be an object
// addCustomer(answers)
// })

//Add a Customer
program
.command("add")
.alias("a")
.description("Add a customer")
.action(() => {
inquirer.prompt(questions).then((answers) => {
addCustomer(answers)
})
})
//Find a customer
program
.command("find <name>")
.alias("f")
.description("Find a customer")
.action((name) => {
    findCustomer(name)
})
//Update a customer
program
.command("update <id>")
.alias("u")
.description("Update a customer")
.action((id) => {
  inquirer.prompt(questions).then((answers) => {
    updateCustomer(id, answers)
  })
})
//Delete a customer
program
.command("remove <id>")
.alias("r")
.description("delete a customer")
.action((id) => {
    deleteCustomer(id)
})
//List All Customers
program
.command("list")
.alias("l")
.description("List All Customers")
.action(() => {
findAllCustomers()
})
program.parse(process.argv)
//when you call customer-cli in terminal it will call node commands.js, check package.json library
//when you are done with your cli, call npm link