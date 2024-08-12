function calculateResult(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let minDiff = 0;
    let hourDiff = 0; 

    minDiff = arriveMin - examMin;
    hourDiff = arriveHour - examHour;

    console.log(`${hourDiff}:${minDiff}`);
    


   // calculate difference in minutes and convert it 
   // log in different chooseOutfitAndShoes

}
 
calculateResult(["9", "30", "9", "50"]);
calculateResult(["9", "00", "8", "30"]);
calculateResult(["16", "00", "15", "00"]);
calculateResult(["9", "00", "10", "30"]);
calculateResult(["14", "00", "13", "55"]);    
calculateResult(["11", "30", "8", "12"]);
calculateResult(["10", "00", "10", "00"]);
calculateResult(["11", "30", "10", "55"]);
calculateResult(["11", "30", "12", "29"]);
