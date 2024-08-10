function calculateBudget(input) {    
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);
    let videoCardPrice = 250;
    let processorPrice = (videoCardPrice * videoCardCount) * 0.35;
    let ramMemoryPrice = (videoCardPrice * videoCardCount) * 0.1;

    let sum = videoCardCount * videoCardPrice + processorCount * processorPrice + ramMemoryCount * ramMemoryPrice;
    if (videoCardCount > processorCount) {
        sum *= 0.85;
    }

    let difference = (Math.abs(sum - budget)).toFixed(2);  
    
    if (budget < sum) {
        console.log(`Not enough money! You need ${difference} leva more!`);        
    } else {
        console.log(`You have ${difference} leva left!`);        
    }
}

calculateBudget(["900", "2", "1", "3"]);
calculateBudget(["920.45", "3", "1", "1"]);