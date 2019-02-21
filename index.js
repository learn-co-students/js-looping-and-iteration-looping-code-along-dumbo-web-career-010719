
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }

  return arr;
}

function tailsNeverFails() {
  let counter = 0;

  while (Math.random() >= .5) {
    counter += 1;
  }

  return `You got ${counter} tails in a row!`;
}
