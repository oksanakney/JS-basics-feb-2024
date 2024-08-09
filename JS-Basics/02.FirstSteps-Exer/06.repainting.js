function colouringPrice(input) {
    const nylonPerSmeterPrice = 1.5;
    const colourPerLiterPrice = 14.5;
    const solventPerLiterPrice = 5;

    let nylonQuantity = Number(input[0]);
    let colourQuantity = Number(input[1]);
    let solventQuantity = Number(input[2]);
    let days = Number(input[3]);

    let nylonPrice = (nylonQuantity + 2) * nylonPerSmeterPrice;
    let colourPrice = (colourQuantity + colourQuantity * 0.1) * colourPerLiterPrice;
    let solventPrice = solventQuantity * solventPerLiterPrice;
    let bagPrice = 0.4;
    let materialPrice = nylonPrice + colourPrice + solventPrice + bagPrice;
    let masterPrice = materialPrice * 0.3 * days;

    let sum = materialPrice + masterPrice;

    console.log(sum.toFixed(2));    
}

colouringPrice(["10 ", "11 ", "4 ", "8 "]);
colouringPrice(["5 ", "10 ", "10 ", "1 "]);