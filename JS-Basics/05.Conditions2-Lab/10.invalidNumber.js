function checkNumber(input) {
  
    let num = Number(input[0]);
    let isValid = num >= 100 && num <= 200 || num === 0;
    
    if (!isValid) {
        console.log("invalid");        
    }
}

checkNumber(["75"]);
checkNumber(["150"]);
checkNumber(["220"]);
checkNumber(["199"]);
checkNumber(["-1"]);
checkNumber(["100"]);
checkNumber(["200"]);
checkNumber(["0"]);
