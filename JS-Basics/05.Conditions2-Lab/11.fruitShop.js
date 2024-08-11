function calculatePrice(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;
    let errorMessage = "error";
    let result = 0;    

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    price = 2.5;
                    result = quantity * price;
                    console.log(result.toFixed(2));                   
                    break;
                case "apple":
                    price = 1.2;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "orange":
                    price = 0.85;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "grapefruit":
                    price = 1.45;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "kiwi":
                    price = 2.70;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "pineapple":
                    price = 5.50;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "grapes":
                    price = 3.85;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;                    
                default:
                    console.log(errorMessage);
                    break;                    
            }                     
            break;

        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    price = 2.70;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "apple":
                    price = 1.25;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "orange":
                    price = 0.9;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "grapefruit":
                    price = 1.6;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "kiwi":
                    price = 3;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "pineapple":
                    price = 5.6;
                    result = quantity * price;
                    console.log(result.toFixed(2));
                    break;
                case "grapes":
                    price = 4.2;
                    result = quantity * price;
                    console.log(result.toFixed(2));                    
                    break;                    
                default:
                    console.log(errorMessage);
                    break;                    
            }
            default:
                console.log(errorMessage);
                break;        
    }            
}

calculatePrice(["apple", "Tuesday", "2"]);
calculatePrice(["orange", "Sunday", "3"]);
calculatePrice(["kiwi", "Monday", "2.5"]);
calculatePrice(["grapes", "Saturday", "0.5"]);
calculatePrice(["tomato", "Monday", "0.5"]);
