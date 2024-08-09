function calculateFoodPrice(input) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.4;
    const vegetarianMenuPrice = 8.15;
    const deliveryPrice = 2.5;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);

    let sum = chickenMenuCount * chickenMenuPrice + fishMenuCount * fishMenuPrice + vegetarianMenuCount * vegetarianMenuPrice;    

    let dessertPrice = sum * 0.2;
         
    let totalPrice = sum + dessertPrice + deliveryPrice;
    console.log(totalPrice.toFixed(2));    
}

calculateFoodPrice(["2 ", "4 ", "3 "]);
calculateFoodPrice(["9 ", "2 ", "6 "]);