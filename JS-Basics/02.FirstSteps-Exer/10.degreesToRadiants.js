function convertDegreesToRadiants(input) {
    let degrees = Number(input[0]);

    let radiants = degrees * Math.PI / 180;

    console.log(`${degrees} degrees are equal to ${radiants.toFixed(2)} radiants`);
}

convertDegreesToRadiants(["0"]);
convertDegreesToRadiants(["30"]);
convertDegreesToRadiants(["60"]);
convertDegreesToRadiants(["90"]);
convertDegreesToRadiants(["120"]);
convertDegreesToRadiants(["150"]);
convertDegreesToRadiants(["180"]);
convertDegreesToRadiants(["360"]);