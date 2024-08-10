function printResult(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secsPerMeter = Number(input[2]);  

    let time = distanceInMeters * secsPerMeter;
    let waterResistenceTime = Math.floor(distanceInMeters/15) * 12.5; 
    time += waterResistenceTime;
    
    let difference = (Math.abs(time - recordInSec)).toFixed(2);
    if (recordInSec <= time) {
        console.log(`No, he failed! He was ${difference} seconds slower.`);        
    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);        
    }
}

printResult(["10464", "1500", "20"]);
printResult(["55555.67", "3017", "5.03"]);