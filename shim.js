#!/usr/bin/env node
require("./build/index.js");
// That's where the shim.js file comes into play. We can include a "shebang" at the top of that file
// that tells our shell to execute the code using the user's locally installed version of NodeJS.
// ./shim.js will run the compiled version of our code

// Let's add a script to our package.json file that will run our src/index.js file directly. The -I flag lets us pass keystrokes
// into the CLI, which will make it interactive. The --exec flag tells Nodemon that rather than running the following code with
// node, run it with babel-node instead. This is what lets us run code that uses ESM.

// we'll write the actual logic of the CLI. There are a few libraries out there that are useful for building CLI tools, but the one
// we'll use for this tutorial is called Inquirer to create some questions for our CLI. We'll also use ora to show a loading spinner when we make calls to our API.
