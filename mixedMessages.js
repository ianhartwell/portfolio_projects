// Task - Create a message generator using JavaScript. Develop locally and utilise Git version control via the command line.
/* Plan:
    - Create a random message generator
    - Utilise random number generators e.g. Math.floor(Math.random() * array.length)
    - Create a message output that has a number of replaceable elements
        - E.g. `${Greeting}! Today could be ${descriptor}. ${Outro}.`
                "Hey there! Today could be your lucky day. You got this!"
    - Create a number of different arrays [Greeting, Descriptor, Outro]
    - Use the random number generator to generate a random index for each array to construct a random message.
    - Output the final message so that it is randomised each time */

// Create a list of arrays for intros, middles and outros
const intro = ['hello', 'hey', 'hi', 'good morning', 'good afternoon'];
const middle = ['sunny', 'cloudy', 'rainy', 'snowy', 'mixed'];
const outro = ['goodbye', 'nice to see you', 'take care', 'good luck', 'you got this'];

// Create a random number generator to select a random array index
const randomIndex = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

// Create function to capitalize the first letter of a word
const capitalize = word => {
    newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;;
};

console.log(capitalize('hello')); // test capitalize function output

// Assign a random intro/middle/outro to variables
let randomIntro = randomIndex(intro);
console.log(randomIntro); // test output
let randomMiddle = randomIndex(middle);
console.log(randomMiddle); // test output
let randomOutro = randomIndex(outro);
console.log(randomOutro); // test output