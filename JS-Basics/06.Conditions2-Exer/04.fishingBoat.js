function calculateBudget(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = input[2];

    let shipRent = 0;     

    if (season === "Spring") {
        price = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
    } else if (season === "Winter") {
        price = 2600;
    }

    if (fishermanCount < 7) {
        price *= 0.9;
    } else if (fishermanCount > 6 && fishermanCount < 12) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }
    
    if (budget < price) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);        
    } else {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);        
    }   
}

calculateBudget(["3000", "Summer", "11"]);
calculateBudget(["3600", "Autumn", "6"]);
calculateBudget(["2000", "Winter", "13"]);
    