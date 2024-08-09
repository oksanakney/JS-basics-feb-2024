function calculatePrice(input) {
    let annualTaxPrice = Number(input[0]);

    let shoesPrice = annualTaxPrice * 0.6;
    let dressPrice = shoesPrice * 0.8;
    let ballPrice = dressPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalSum = annualTaxPrice + shoesPrice + dressPrice + ballPrice + accessoriesPrice;
    console.log(totalSum);    
}

calculatePrice(["365"]);
calculatePrice(["550"]);