const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let intermediateString = "";
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  // TODO: Log the answer in a database
  intermediateString += `${answer}`
  let name = answer;
  
  rl.question("What's an activity you like doing?", (answer) => {
    // TODO: Log the answer in a database
    intermediateString +=` likes to ${answer}`;

    rl.question("What do you listen to while doing that?", (answer) => {
      // TODO: Log the answer in a database
      intermediateString +=` and while (s)he does, (s)he likes to listen to ${answer}.`;

      rl.question("Which meal is your favourite?", (answer) => {
        // TODO: Log the answer in a database
        intermediateString +=` ${name}'s favourite meal is ${answer}`;
        let favouriteMeal = answer;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          // TODO: Log the answer in a database
          intermediateString +=` and (s)he likes to eat ${answer} for ${favouriteMeal}.`;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            // TODO: Log the answer in a database
            intermediateString +=` ${name}'s favourite sport is ${answer}.`;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
            // TODO: Log the answer in a database
            intermediateString +=` Lastly, ${name}'s superpower is ${answer}!`;
            console.log(intermediateString)
            rl.close();
            })
          })
        })
      })
    })
  })
});