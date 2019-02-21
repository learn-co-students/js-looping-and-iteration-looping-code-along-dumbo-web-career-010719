// Code your solutions in this file
const printBadges = (array) => {
    for(let i=0; i<array.length; i++){
        console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
    }
    return array
}

const tailsNeverFails = () => {
    let count=0;
    while(maybeTrue()){
        count+=1;
    }
    return `You got ${count} tails in a row!`
}

const maybeTrue = () => {
    return Math.random() >= 0.5;
}