function findMaxNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2) {
        console.log(num1);        
    } else {
        console.log(num2);        
    }
    //let result = Math.max(num1, num2);
    //console.log(result);    
}

findMaxNumber(["5", "3"]);
findMaxNumber(["11", "5"]);
findMaxNumber(["10", "10"]);
findMaxNumber(["-5", "5"]);