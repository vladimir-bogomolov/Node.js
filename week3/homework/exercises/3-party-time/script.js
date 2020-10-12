
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  try {
    let res = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
      name: 'John Doe',
      numberOfPeople: 3
    })});
    let result = await res.json();
    console.log(result);
  } catch(err) {
    console.error(err);
  }
}

makeReservation();