function calculatePrice(input) {
    let month = input[0];
    let nights = Number([input[1]]);    

    let studioPrice = 0;
    let appartmentPrice = 0;
    let totalStudioPrice = 0;
    let totalAppPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        appartmentPrice = 65;
        totalStudioPrice = studioPrice * nights;
        totalAppPrice = appartmentPrice * nights;
        if (nights > 7 && nights <= 14 ) {
            totalStudioPrice *= 0.95;
        } else if (nights > 14) {
            totalStudioPrice *= 0.7;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = 75.2;
        appartmentPrice = 68.7;
        totalStudioPrice = studioPrice * nights;
        totalAppPrice = appartmentPrice * nights;
        if (nights > 14) {
            totalStudioPrice *= 0.8;
        }
    } else {
        studioPrice = 76;
        appartmentPrice = 77;
        totalStudioPrice = studioPrice * nights;
        totalAppPrice = appartmentPrice * nights;
    }

    if (nights > 14) {
        totalAppPrice *= 0.9;
    }   
    

    console.log(`Apartment: ${(totalAppPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(totalStudioPrice).toFixed(2)} lv.`);
}

calculatePrice(["May", "15"]);
calculatePrice(["June", "14"]);
calculatePrice(["August", "20"]);