// Code your solutions in this file

function printBadges(hibitch){
  for (let i = 0; i < hibitch.length; i++){
    console.log(`Welcome ${hibitch[i]}! You are employee #${[i+ 1]}.`);

  }
  return hibitch
}

function tailsNeverFails(){
  let tails = 0;

  while  (Math.random() >= 0.5){
    tails++
  };
  return `You got ${tails} tails in a row!`
}
