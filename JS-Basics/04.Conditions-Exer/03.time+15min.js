function calculateTime(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    if (minutes < 45) {
        minutes += 15;
    } else {
        hours += 1;
        minutes -= 45;
    }
    if (hours >= 24) {
        hours -=24;
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);        
    } else {
        console.log(`${hours}:${minutes}`);        
    }
}

calculateTime(["1", "46"]); // 2:01
calculateTime(["0", "01"]); // 0:16
calculateTime(["23", "59"]); // 0:14
calculateTime(["11", "08"]); // 11:23
calculateTime(["12", "49"]); // 13:04
calculateTime(["17", "06"]); // 17:21