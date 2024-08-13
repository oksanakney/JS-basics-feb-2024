function calculateResult(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
    let differenceInMins = 0;

    let mins = 0;
    let hours = 0;

    

    // Output
    if (differenceInMins >= 0 && differenceInMins <=30) {
        console.log("On time");
        console.log(`30 minutes before the start`);                
    } else if (differenceInMins > 30) {
        console.log("Early");
        console.log(`1:00 hours before the start`);       
    } else if (differenceInMins < 0) {
        console.log("Late");
        console.log(`20 minutes after the start`);        
    }
}

calculateResult(["9", "30", "9", "50"]);
calculateResult(["9", "30", "9", "05"]);
calculateResult(["9", "00", "8", "30"]);
calculateResult(["16", "00", "15", "00"]);
calculateResult(["9", "00", "10", "30"]);
calculateResult(["14", "00", "13", "55"]);    
calculateResult(["11", "30", "8", "12"]);
calculateResult(["10", "00", "10", "00"]);
calculateResult(["11", "30", "10", "55"]);
calculateResult(["11", "30", "12", "29"]);