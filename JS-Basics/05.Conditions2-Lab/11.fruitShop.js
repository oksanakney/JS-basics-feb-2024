function calculatePrice(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;    
    let result = 0;    

    let isValidDay = day === "Monday" || day === "Tuesday" || day=== "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday";
    let isValidFood = fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes";
    if (!isValidDay || !isValidFood) {
        console.log("error");
    } else {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                switch (fruit) {
                    case "banana":
                        price = 2.5;                                           
                        break;
                    case "apple":
                        price = 1.2;                        
                        break;
                    case "orange":
                        price = 0.85;                        
                        break;
                    case "grapefruit":
                        price = 1.45;                       
                        break;
                    case "kiwi":
                        price = 2.70;                        
                        break;
                    case "pineapple":
                        price = 5.50;                        
                        break;
                    case "grapes":
                        price = 3.85;                        
                        break;                                       
                }                     
                break;
    
            case "Saturday":
            case "Sunday":
                switch (fruit) {
                    case "banana":
                        price = 2.70;                        
                        break;
                    case "apple":
                        price = 1.25;                       
                        break;
                    case "orange":
                        price = 0.9;                        
                        break;
                    case "grapefruit":
                        price = 1.6;                        
                        break;
                    case "kiwi":
                        price = 3;                        
                        break;
                    case "pineapple":
                        price = 5.6;                       
                        break;
                    case "grapes":
                        price = 4.2;                                   
                        break;                    
                }
                break;        
        }
        result = quantity * price;
        console.log(result.toFixed(2));
    }                
}

calculatePrice(["apple", "Tuesday", "2"]);
calculatePrice(["orange", "Sunday", "3"]);
calculatePrice(["kiwi", "Monday", "2.5"]);
calculatePrice(["grapes", "Saturday", "0.5"]);
calculatePrice(["tomato", "Monday", "0.5"]);
