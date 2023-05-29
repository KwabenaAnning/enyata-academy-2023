function WholeStory(){
const Title =prompt("Welcome to my page. You are a winner.REPEAT IT")

const name = prompt(`type your name? : `);

let gender = prompt("what gender are you? :");

let age = parseInt(prompt("how old are you? : "))

const storyTitle = prompt ("Hey, type the title of your favorite story? : ");

const isthistrue = prompt ("Is this a real story? true or false: ");

let favoriteCharacter = prompt (" who was your best character? : ");

let aboutStory = prompt("what is the story about? : ");

let learnOurcome = prompt(" what did you learn from the story? : ");

let recommend = prompt("who will you recommend it to? : ")

let rating = parseInt(prompt ("On a scale of 1 to 10, how will you rate it :") );

let storyTemplate = `   My name is ${name}. I am ${gender}. I am ${age} years old.
The title of my story is ${storyName}...
 This is a ${isthistrue} and I will give it a ${rating}.  ${favoriteCharacter} was my best favorite character. The story was about ${aboutStory}.
  ${learnOurcome}.I will ${recommend} to the orphans.
  `;
  
  let output = WholeStory;
let WholeStory = storyTemplate 

 // display the story to the user
 alert(WholeStory);}

// call wholeStory
WholeStory();

