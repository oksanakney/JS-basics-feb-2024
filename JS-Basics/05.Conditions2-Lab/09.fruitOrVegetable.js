function printFruitOrVegetable(input) {
    let plantName = input[0];
    let result = "";    

    switch (plantName) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            result = "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            result = "vegetable";        
            break;
        default:
            result = "unknown";
            break;
    }

    console.log(result);    
}

printFruitOrVegetable(["banana"]);
printFruitOrVegetable(["apple"]);
printFruitOrVegetable(["tomato"]);
printFruitOrVegetable(["water"]);
printFruitOrVegetable(["kiwi"]);