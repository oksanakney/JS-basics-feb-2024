function printPrice(input) {
    let day = input[0];
    let price = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;            
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            break;
        case "Saturday":
        case "Sunday":
            price = 16;
        default:
            break;
    }

    console.log(price);
    
}

printPrice(["Monday"]);
printPrice(["Thursday"]);
printPrice(["Sunday"]);