function chooseOutfitAndShoes(input) {
    let temperature = Number(input[0]);
    let dayTime = input[1];

    let outfit = "";
    let shoes = "";

    if (temperature >= 10 && temperature <= 18) {
        if (dayTime === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayTime === "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }        
    } else if (temperature > 18 && temperature <= 24) {
        if (dayTime === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayTime === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
    } else if (temperature >= 25) {
        if (dayTime === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayTime === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";  // Bos
        } else if (dayTime === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);   
}

chooseOutfitAndShoes(["16", "Morning"]);
chooseOutfitAndShoes(["22", "Afternoon"]);
chooseOutfitAndShoes(["28", "Evening"]);