function printDay(input) {
    let dayNum = Number(input[0]);

    switch (dayNum) {
        case 1:
            console.log("Monday");           
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7: 
            console.log("Sunday");
            break;           
    
        default:
            console.log("Error");           
            break;
    }
}

printDay(["2"]);
printDay(["5"]);
printDay(["-2332"]);