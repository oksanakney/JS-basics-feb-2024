function calculateTripMoney(input) {
    let nights = Number(input[0]) - 1;
    let roomType = input[1];
    let rating = input[2];
    let totalPrice = 0;
    let price = 0;

    if (roomType === "room for one person") {
        price = 18;        
    } else if (roomType === "apartment") {
        price = 25;
    } else {
        price = 35;
    }

    totalPrice = price * nights;

    if (roomType === "apartment") {
        if (nights < 9) {
            totalPrice *= 0.7;
        } else if (nights >= 9 && nights <= 14) {
            totalPrice *= 0.65;
        } else {
            totalPrice *= 0.5;
        }
        
    } else if (roomType === "president apartment") {
        if (nights < 9) {
            totalPrice *= 0.9;
        } else if (nights >= 9 && nights <= 14) {
            totalPrice *= 0.85;
        } else {
            totalPrice *= 0.8;
        }        
    }

    if (rating === "negative") {
        totalPrice *= 0.9;
    } else {
        totalPrice *= 1.25;
    }

    console.log((totalPrice).toFixed(2));
}

calculateTripMoney(["14", "apartment", "positive"]);
calculateTripMoney(["30", "president apartment", "negative"]);
calculateTripMoney(["12", "room for one person", "positive"]);
calculateTripMoney(["2", "apartment", "positive"]);
    