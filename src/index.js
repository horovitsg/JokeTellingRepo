import inquirer from "inquirer";
import { getJoke } from "./api_call";

function logAndExit(message, code) {
  console.log(message);
  process.exit(code);
}

inquirer
  .prompt({
    type: "list",
    name: "jokeType",
    message: "What type of joke do you want to hear?",
    choices: ["Dad Joke", "Chuck Norris"],
    default: false,
  })
  .then(async (answers) => {
    if (answers.jokeType === "Dad Joke") {
      try {
        const jokeData = await getJoke("icanhazdadjoke.com");
        const { joke } = jokeData;

        logAndExit(joke, 0);
      } catch (err) {
        logAndExit(err, 1);
      }
    } else if (answers.jokeType === "Chuck Norris") {
      try {
        const jokeData = await getJoke("api.chucknorris.io", "/jokes/random");
        const joke = jokeData.value; // This API puts the joke on the "value" property
        logAndExit(joke, 0);
      } catch (err) {
        logAndExit(err, 1);
      }
    }
  });
