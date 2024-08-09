function calculatePetFoodPrice(input) {
    const dogFoodPrice = 2.5;
    const catFoodPrice = 4;
    let totalPrice = 0;

    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);

    totalPrice = dogFoodCount * dogFoodPrice + catFoodCount * catFoodPrice;

    console.log(totalPrice + " lv.");    
}

calculatePetFoodPrice(["5", "4"]);
calculatePetFoodPrice(["13", "9"]);
calculatePetFoodPrice(["0", "12"]);
calculatePetFoodPrice(["3", "0"]);