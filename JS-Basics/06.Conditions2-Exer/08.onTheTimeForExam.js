function calculateResult(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    if (examMin < 10) {
        console.log(`Exam:    ${examHour}:0${examMin}`);
    } else {
        console.log(`Exam:    ${examHour}:${examMin}`);
    }

    if (arriveMin < 10) {
        console.log(`Arrival: ${arriveHour}:0${arriveMin}`);
    } else {
        console.log(`Arrival: ${arriveHour}:${arriveMin}`);
    }
    
    

    // Calculate seconds difference
    let hourDiff = arriveHour - examHour; 
    let minDiff = arriveMin - examMin;
    let hours = 0;
    let mins = 0;
    if (hourDiff === -1 && Math.abs(minDiff) < 60) {
        mins = 60 - minDiff;
        hours = 0;
    } else if (hourDiff === 0 && minDiff >= 0) {
        if (minDiff !== 0) {
            mins = - minDiff;
        } else {
            mins = 0;
        }        
        hours = 0;
    } else if (hourDiff === 0 && minDiff < 0) {
        if (minDiff !== 0) {
            mins = - minDiff;
        } else {
            mins = 0;
        }        
        hours = 0;
    } else if (hourDiff > 0 && minDiff < 0) {
        mins =  -(hourDiff * 60 - Math.abs(minDiff));
        hours = 0;
    } else if (hourDiff > 0 && minDiff >= 0) {
        mins = -(hourDiff * 60 + Math.abs(minDiff));
        hours = 0;
    } else if (hourDiff < -1 && minDiff <= 0) {
        mins = Math.abs(hourDiff) * 60 + Math.abs(minDiff) ;
        hours = 0;
    } else if (hourDiff < -1 && minDiff > 0) {
        mins = (Math.abs(hourDiff) - 1) * 60 + (60 - Math.abs(minDiff));
        hours = 0;
    }
    console.log(`New: ${hours}:${mins}`);
    console.log(mins);
    
    

 
      
    console.log();

    // Write output 
}
 
calculateResult(["9", "30", "9", "50"]);
calculateResult(["9", "30", "9", "05"]);
calculateResult(["9", "00", "8", "30"]);
calculateResult(["16", "00", "15", "00"]);
calculateResult(["9", "00", "10", "30"]);
calculateResult(["14", "00", "13", "55"]);    
calculateResult(["11", "30", "8", "12"]);
calculateResult(["11", "30", "8", "45"]);
calculateResult(["11", "30", "8", "30"]);
calculateResult(["10", "00", "10", "00"]);
calculateResult(["11", "30", "10", "55"]);
calculateResult(["11", "30", "12", "29"]);
