function findDestination(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let type = "";
    let moneySpent = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "winter") {
            type = "Hotel";
            moneySpent = budget * 0.7;
        } else {
            type = "Camp";
            moneySpent = budget * 0.3;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "winter") {
            type = "Hotel";
            moneySpent = budget * 0.8;
        } else {
            type = "Camp";
            moneySpent = budget * 0.4;
        }
    } else {
        destination = "Europe";
        type = "Hotel";
        moneySpent = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(moneySpent).toFixed(2)}`);   
}

findDestination(["50", "summer"]);
findDestination(["75", "winter"]);
findDestination(["312", "summer"]);
findDestination(["678.53", "winter"]);
findDestination(["1500", "summer"]);