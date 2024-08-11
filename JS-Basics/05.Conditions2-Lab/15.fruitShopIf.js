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
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            if (fruit === "banana") {
                price = 2.5;
            } else if (fruit === "apple") {
                price = 1.2;
            } else if (fruit === "orange") {
                price = 0.85;
            } else if (fruit === "grapefruit") {
                price = 1.45;
            } else if (fruit === "kiwi") {
                price = 2.7;
            } else if (fruit === "pineapple") {
                price = 5.5;
            } else if (fruit === "grapes") {
                price = 3.85;                        
            }       
        } else if (day === "Saturday" || day === "Sunday") {
            if (fruit === "banana") {
                price = 2.7;
            } else if (fruit === "apple") {
                price = 1.25;
            } else if (fruit === "orange") {
                price = 0.9;
            } else if (fruit === "grapefruit") {
                price = 1.6;
            } else if (fruit === "kiwi") {
                price = 3;
            } else if (fruit === "pineapple") {
                price = 5.6;
            } else if (fruit === "grapes") {
                price = 4.2;
            }
        }
    
        result = price * quantity;   
        console.log(result.toFixed(2)); 
    }      
}

calculatePrice(["apple", "Tuesday", "2"]);
calculatePrice(["orange", "Sunday", "3"]);
calculatePrice(["kiwi", "Monday", "2.5"]);
calculatePrice(["grapes", "Saturday", "0.5"]);
calculatePrice(["tomato", "Monday", "0.5"]);