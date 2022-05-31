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
      message: "where are you from?",
      name: "location",
    },
    {
      type: "input",
      message: "what is your favorite food?",
      name: "food",
    },
    {
      type: "input",
      message: "what is your favorite hobby?",
      name: "hobby",
    },
    {
      type: "input",
      message: "what is your github user name?",
      name: "github",
    },
    {
      type: "input",
      message: "what is your linkedIn URL?",
      name: "linkedin",
    },
  ])
  .then((response) => {
    fs.writeFile(
      "index.html",
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Gen</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="jumbotron d-flex align-items-center flex-column">
      <div class="display-4"></div>
      <h1>${response.name}</h1>
      <h2>${response.location}</h2>
      <p>${response.hobby}</p>
    </header>
    <main class="d-flex align-items-center flex-column">
      <div>${response.github}</div>
      <div>${response.linkedin}</div>
    </main>
    <script src="/01-Activities/28-Stu_Mini-project/index.js"></script>
  </body>
</html>`,
      (err) => {
        err ? console.log(err) : console.log("success!");
      }
    );
  });
