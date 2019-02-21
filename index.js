// Code your solutions in this file
function printBadges(array){
    for(const element of array){
        //console.log(element);
        console.log("Welcome " + element + "! You are employee #" + (array.indexOf(element) +1) + '.');
    }
    return array;
}

function tailsNeverFails(){
    let tails = 0;
    while(Math.random()>=0.5){
        tails++;
    }
    return ('You got ' + tails + ' tails in a row!');
}