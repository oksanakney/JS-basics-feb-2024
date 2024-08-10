function calculateArea(input) {
    let figure = input[0];

    let area = 0;

    if (figure === "square") {
        let sideLength = Number(input[1]);
        area = Math.pow(sideLength, 2);
    } else if (figure === "rectangle") {
        let length = Number(input[1]);
        let width = Number(input[2]);
        area = length * width;
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * (Math.pow(radius, 2));
    } else {
        let height = Number(input[1]);
        let sideLength = Number(input[2]);
        area = (height * sideLength) / 2;
    }

    console.log(area.toFixed(3));    
}

calculateArea(["square", "5"]);
calculateArea(["rectangle", "7", "2.5"]);
calculateArea(["circle", "6"]);
calculateArea(["triangle", "4.5", "20"]);
calculateArea(["rectangle", "13.89", "8.94"]);
calculateArea(["triangle", "12", "3.14"]);