function calculateMovieTime(input) {
    let movieName = input[0];
    let movieTimeNeeded = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;  // toFixed converts to  string!!! => disables to do math operation later
    let restTime = breakTime / 4;

    let leftTime = breakTime - lunchTime - restTime;    
   
    if (leftTime >= movieTimeNeeded ) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime-movieTimeNeeded)} minutes free time.`);        
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieTimeNeeded - leftTime)} more minutes.`);        
    }
}

calculateMovieTime(["Game of Thrones", "60", "96"]);
calculateMovieTime(["Teen Wolf", "48", "60"]);