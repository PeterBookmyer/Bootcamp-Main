const express = require("express");

const app = express();
const PORT = 3001;

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/images/cat.jpg

//middleware - when a request comes in from a client, and before the route handlers take over, please run this code
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
