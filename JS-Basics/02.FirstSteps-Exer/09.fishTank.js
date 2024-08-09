function calculateLiters(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentageOccupied = (Number(input[3])) / 100;

    let waterLiters = (length * width * height) / 1000;
    let totalLiters = waterLiters * (1 - percentageOccupied);

    console.log(totalLiters);
    
}

calculateLiters(["85 ", "75 ", "47 ", "17 "]);
calculateLiters(["105 ", "77 ", "89 ", "18.5 "]);