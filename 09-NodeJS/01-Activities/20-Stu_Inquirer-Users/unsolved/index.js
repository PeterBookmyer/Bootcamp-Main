const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "what languages do you know?",
      name: "language",
    },
    {
      type: "input",
      message: "what is your preferred method of comm?",
      name: "comm",
    },
  ])
  .then((response) => {
    fs.writeFile("form.txt", JSON.stringify(response), (err) => {
      err ? console.log(err) : console.log("success!");
    });
  });
