function convertRadiantsToDegrees(input) {
    let radiants = Number(input[0]);

    let degrees = radiants * 180 / Math.PI;
    console.log(degrees);    
}

convertRadiantsToDegrees(["3.1416"]);
convertRadiantsToDegrees(["6.2832"]);
convertRadiantsToDegrees(["2"]);
convertRadiantsToDegrees(["1.5"]);

