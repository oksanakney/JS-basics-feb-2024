function printDay(input) {
    let dayNumber = Number(input[0]);

    if (dayNumber === 1) {
        console.log("Monday");        
    } else if (dayNumber === 2) {
        console.log("Tuesday")
    } else if (dayNumber === 3) {
        console.log("Wednesday");        
    } else if (dayNumber === 4) {
        console.log("Thursday");         
    } else if (dayNumber === 5) {
        console.log("Friday");        
    } else if (dayNumber === 6) {
        console.log("Saturday");        
    } else if (dayNumber === 7) {
        console.log("Sunday");        
    } else {
        console.log("Error");        
    }
}

printDay(["1"]);
printDay(["2"]);
printDay(["3"]);
printDay(["4"]);
printDay(["5"]);
printDay(["6"]);
printDay(["7"]);
printDay(["-9876"]);