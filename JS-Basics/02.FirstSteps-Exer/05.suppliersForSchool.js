function calculatePrice(input) {
    let penPrice = 5.80;
    let markerPrice = 7.20;
    let detergentPrice = 1.20;

    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergentCount = Number(input[2]);
    let discount = 1 - (Number(input[3]))/ 100;

    let sum = (penPrice * penCount + markerPrice * markerCount + detergentPrice * detergentCount) * discount;

    console.log(sum);    
}

calculatePrice(["2 ","3 ","4 ", "25 "]);
calculatePrice(["4 ","2 ","5 ","13 "]);