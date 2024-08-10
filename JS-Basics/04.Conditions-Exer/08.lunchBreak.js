function calculateMovieTime(input) {
    let movieName = input[0];
    let movieTimeNeeded = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = (breakTime / 8).toFixed(1);  // toFixed converts to  string!!! => disables to do math operation later
    let restTime = (breakTime / 4).toFixed(1);

    let leftTime = Math.floor(breakTime - parseFloat(lunchTime) - parseFloat(restTime));
    let difference = /*Math.ceil*/(leftTime - movieTimeNeeded); 
    let roundedDifference = Math.ceil(difference);
    let roundedAbsDifference = Math.ceil(Math.abs(difference));    

    if (difference >= 0 ) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.floor(roundedDifference)} minutes free time.`);        
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.floor(roundedAbsDifference)} more minutes.`);        
    }
}

calculateMovieTime(["Game of Thrones", "60", "96"]);
calculateMovieTime(["Teen Wolf", "48", "60"]);