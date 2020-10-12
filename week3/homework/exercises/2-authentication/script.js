
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
async function printBooks() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  try {
    let res = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {'headers': {'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ=='}});
    let books = await res.json();
    console.log(books);
  } catch(err) {
    console.error(err);
  }
}

printBooks();