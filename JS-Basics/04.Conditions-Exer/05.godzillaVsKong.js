function calculateFunds(input) {
    let movieBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let dressPerStatistPrice = Number(input[2]);

    let decorationPrice = movieBudget * 0.1;
    let dressPrice = statistCount * dressPerStatistPrice;
    if (statistCount >= 150) {
        dressPrice *= 0.9;
    }

    let totalPrice = dressPrice + decorationPrice;
    let difference = (Math.abs(totalPrice - movieBudget)).toFixed(2);

    if (movieBudget < totalPrice) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference} leva more.`);        
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference} leva left.`);        
    }
} 

calculateFunds(["20000", "120", "55.5"]);
calculateFunds(["15437.62", "186", "57.99"]);
calculateFunds(["9587.88", "222", "55.68"]);