function printNumbers(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }        
    }
}

printNumbers(["3"]);
printNumbers(["4"]);
printNumbers(["5"]);
printNumbers(["6"]);
printNumbers(["7"]);