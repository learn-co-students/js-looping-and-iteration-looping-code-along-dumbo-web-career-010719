// Code your solutions in this file
function printBadges(names){
	for(let i = 0; i<names.length; i++){
		console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
	}
	return names;
}

tailWins = 0
headWins = 0

// function tailsNeverFails(){
// 	let result = Math.random()
// 	if (result >= 0.5){
// 		tailWins+=1;
// 	} else {
// 		headWins+=1;
// 	}
// 	while(headWins === 0){
// 		tailsNeverFails();
// 	}
// 	console.log(`total flips ${headWins + tailWins}`)
// 	if (headWins > 0){
// 		return `You got ${tailWins} tails in a row!`;
// 	}

// }

function tailsNeverFails(){
	let i = 0;
	while (Math.random() >= 0.5){
		i++;
	}
	return `You got ${i} tails in a row!`

}