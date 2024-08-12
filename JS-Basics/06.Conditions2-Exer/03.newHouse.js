function calculateFlowerBudget(input) {
    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;    

    switch (flower) {
        case "Roses":
            price = 5;
            break;
        case "Dahlias":
            price = 3.8;
            break;
        case "Tulips":
            price = 2.8;
            break;
        case "Narcissus":
            price = 3;
            break;
        case "Gladiolus":
            price = 2.5;
            break;       
    }

    let totalPrice = price * count;
    if (flower === "Roses" && count > 80) {
        totalPrice *= 0.9;
    } else if (flower === "Dahlias" && count > 90) {
        totalPrice *= 0.85;
    } else if (flower === "Tulips" && count > 80) {
        totalPrice *= 0.85;
    } else if (flower === "Narcissus" && count < 120) {
        totalPrice *= 1.15;
    } else if (flower === "Gladiolus" && count < 80) {
        totalPrice *= 1.2;
    }

    if (budget < totalPrice) {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);        
    } else {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);        
    }   
}

calculateFlowerBudget(["Roses", "55", "250"]);
calculateFlowerBudget(["Tulips", "88", "260"]);
calculateFlowerBudget(["Narcissus", "119", "360"]);