function calculateProfit(input) {   
    const puzzlePrice = 2.6;
    const dollPrice = 3;
    const teddyBearPrice = 4.1;
    const mignonPrice = 8.2;
    const truckPrice = 2;
    let totalPrice = 0;

    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let mignonCount = Number(input[4]);
    let truckCount = Number(input[5]);

    totalPrice = puzzleCount * puzzlePrice + dollCount * dollPrice + teddyBearCount * teddyBearPrice + mignonCount * mignonPrice + truckCount * truckPrice;
    let totalCount = puzzleCount + dollCount + teddyBearCount + mignonCount + truckCount;
    if (totalCount >= 50) {
        totalPrice *= 0.75;
    }
    let rent = totalPrice * 0.1;
    totalPrice -= rent;
    let difference = (Math.abs(totalPrice - excursionPrice)).toFixed(2);

    if (totalPrice >= excursionPrice) {
        console.log(`Yes! ${difference} lv left.`);        
    } else {
        console.log(`Not enough money! ${difference} lv needed.`);       
    }
}

calculateProfit(["40.8",  "20", "25", "30", "50", "10"]);
calculateProfit(["320", "8", "2", "5", "5", "1"]);
