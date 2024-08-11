function printResult(input) {
    let number = Number(input[0]);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");        
    } else {
        console.log("No");       
    }
}

printResult(["-25"]);
printResult(["0"]);
printResult(["25"]);
printResult(["100"]);
printResult(["-100"]);
printResult(["-89263453"]);
printResult(["9047238"]);