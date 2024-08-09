function calculateYardGreeningPrice(input) {
    let sMeters = Number(input);
    const smPrice = 7.61;
    const discount = 0.18;

    let price = (sMeters * smPrice).toFixed(2);
    let priceDiscount = (price * discount).toFixed(2);
    let finalPrice = (price - priceDiscount).toFixed(2);

    console.log("The final price is: " + finalPrice + " lv.");
    console.log("The discount is: " + priceDiscount + " lv.");    
}

calculateYardGreeningPrice("550");
calculateYardGreeningPrice("150");
calculateYardGreeningPrice("300");
calculateYardGreeningPrice("222");