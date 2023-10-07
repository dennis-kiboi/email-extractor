let prompt = require('prompt-sync')();
let input = prompt('Enter your email: ');

// console.log("You entered: " + input);

const extractEmail = (email) => {
  const names = email.split("@")[0];
  const newNames = names.split(".");
  const firstName = newNames[0].charAt(0).toUpperCase() + newNames[0].slice(1)
  const secondName = newNames[1].charAt(0).toUpperCase() + newNames[1].slice(1)
  
  const fullName = firstName + " "+ secondName

  console.log(fullName);
}

extractEmail(input);