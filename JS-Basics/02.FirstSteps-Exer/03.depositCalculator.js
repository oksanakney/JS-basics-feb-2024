function calculateDeposit(input) {
    let amountDeposited = Number(input[0]);
    let terms = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sum = amountDeposited + terms * ((amountDeposited * annualInterestRate / 100) / 12);

    console.log(sum.toFixed(2));
}

calculateDeposit(["200 ", "3 ", "5.7 "]);
calculateDeposit(["2350", "6 ", "7 "]);
// calculateDeposit();
// calculateDeposit();
// calculateDeposit();