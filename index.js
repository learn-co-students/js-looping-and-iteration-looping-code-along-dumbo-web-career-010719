// Code your solutions in this file
// In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name.
// Create a for loop with a counter that starts at 0 and increments at the end of each loop. The condition should halt the for loop after the last name in the array is printed out in the loop body.
// Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift.
// Collect the messages in an array and return this array.

function writeCards(arr,eventName){
  const cards = [];
  for (let i = 0; i < arr.length; i++) {
    cards.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
  }
  return cards;
}
