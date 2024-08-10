function calculateScoreWithBonus(input) {
    let num = Number(input[0]);

    let bonus = 0;

    if (num <= 100) {
        bonus = 5;
    } else if (num <= 1000) {
        bonus = num * 0.2;
    } else if (num > 1000) {
        bonus = num * 0.1;
    }

    if (num % 2 === 0) {
        bonus += 1;
    } 
    if (num % 10 === 5) {
        bonus += 2;
    }

    totalSum = num + bonus;
    console.log(bonus);
    console.log(totalSum);   
}

calculateScoreWithBonus(["20"]);
calculateScoreWithBonus(["175"]);
calculateScoreWithBonus(["2703"]);
calculateScoreWithBonus(["15875"]);
calculateScoreWithBonus(["0"]);
calculateScoreWithBonus(["-1234.6"]);