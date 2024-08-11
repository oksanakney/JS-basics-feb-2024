function calculatePrice(input) {
    /**град / продукт coffee water beer sweets peanuts
     Sofia             0.50  0.80  1.20  1.45   1.60
     Plovdiv           0.40  0.70  1.15  1.30   1.50
     Varna             0.45  0.70  1.10  1.35   1.55    */
     let product = input[0];
     let city = input[1];
     let count = Number(input[2]);
     let price = 0;

     switch (product) {
        case "coffee":
            switch (city) {
                case "Sofia":
                    price = 0.5;
                    break;
                case "Plovdiv":
                    price = 0.4;
                    break;
                case "Varna":
                    price = 0.45;
                    break;                
            }
            break;
        case "water":
            switch (city) {
                case "Sofia":
                    price = 0.8;
                    break;
                case "Plovdiv":
                    price = 0.7;
                    break;
                case "Varna":
                    price = 0.7;
                    break;               
            }
            break;
        case "beer":
            switch (city) {
                case "Sofia":
                    price = 1.2;
                    break;
                case "Plovdiv":
                    price = 1.15;
                    break;
                case "Varna":
                    price = 1.1;
                    break;                
            }
            break;
        case "sweets":
            switch (city) {
                case "Sofia":
                    price = 1.45;
                    break;
                case "Plovdiv":
                    price = 1.30;
                    break;
                case "Varna":
                    price = 1.35;
                    break;                
            }
            break;
        case "peanuts":
            switch (city) {
                case "Sofia":
                    price = 1.6;                     
                    break;
                case "Plovdiv":
                    price = 1.5;
                    break;
                case "Varna":
                    price = 1.55;
                    break;               
            }    
            break;    
     }

     let totalPrice = price * count;
     console.log(totalPrice);
     
}

calculatePrice(["coffee", "Varna", "2"]);
calculatePrice(["peanuts", "Plovdiv", "1"]);    
calculatePrice(["beer", "Sofia", "6"]);
calculatePrice(["water", "Plovdiv", "3"]);
calculatePrice(["sweets", "Sofia", "2.23"]);