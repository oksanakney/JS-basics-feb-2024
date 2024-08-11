function calculateCommisions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let isValidCity = city === "Sofia" || city === "Plovdiv" || city === "Varna";
    let isValidNumber = sales >= 0;
    let commisions = 0;

    if (!isValidCity || !isValidNumber) {
        console.log("error");        
    } else {
        if (city === "Sofia") {
            if (sales >= 0 && sales <= 500) {
                commisions = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commisions = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commisions = 0.08;
            } else {
                commisions = 0.12;
            }
        } else if (city === "Varna") {
            if (sales >= 0 && sales <= 500) {
                commisions = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commisions = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commisions = 0.1;
            } else {
                commisions = 0.13;
            }
        } else {
            if (sales >= 0 && sales <= 500) {
                commisions = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commisions = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commisions = 0.12;
            } else {
                commisions = 0.145;
            }
        }
        result = commisions * sales;
        console.log(result.toFixed(2));
        
    }
}

calculateCommisions(["Sofia", "1500"]);
calculateCommisions(["Plovdiv", "499.99"]);
calculateCommisions(["Varna", "3874.50"]);
calculateCommisions(["Kaspichan", "-50"]);