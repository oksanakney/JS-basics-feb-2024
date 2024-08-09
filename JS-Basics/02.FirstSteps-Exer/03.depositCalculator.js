function calculateDeposit(input) {
    let amountDeposited = Number(input[0]);
    let terms = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    /*сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
Вход
От конзолата се четат 3 реда:
    1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
    2. Срок на депозита (в месеци) – цяло число в интервала [1…12]
    3. Годишен лихвен процент – реално число в интервала [0.00 …100.00] */

    let sum = amountDeposited + terms * ((amountDeposited * annualInterestRate/100) / 12);

    console.log(sum.toFixed(2));

}

calculateDeposit(["200 ", "3 ", "5.7 "]);
calculateDeposit(["2350", "6 ", "7 "]);
// calculateDeposit();
// calculateDeposit();
// calculateDeposit();