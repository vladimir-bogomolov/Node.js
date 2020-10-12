/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

async function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  try {
    let response = await fetch('http://api.icndb.com/jokes/random');
    let result = await response.json();
    console.log(result.value.joke);
  } catch(err) {
    console.error(err);
  }
}

printChuckNorrisJoke();