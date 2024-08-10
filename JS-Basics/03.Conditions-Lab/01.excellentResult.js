function printResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");        
    }
}

printResult(["5.50"]);
printResult(["5.49"]);
printResult(["2.08"]);
printResult(["3.51"]);
printResult(["4.65"]);