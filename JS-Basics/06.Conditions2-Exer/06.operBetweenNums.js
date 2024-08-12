function calculate(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let operator = input[2];
    let result = 0;    

    switch (operator) {
        case "+":
        result = N + M;            
            break;
        case "-":
            result = N - M;            
            break;
        case "*":
            result = N * M;            
            break;
        case "/":            
            result = N / M;            
            break;
        case "%":
            result = N % M;
            break;        
    }

    let evenOrOdd = "";
    if (result % 2 === 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }

    if ((operator === "/" || operator === "%") && M === 0) {
        console.log(`Cannot divide ${N} by zero`); 
    } else {
        if (operator === "+" || operator === "-" || operator === "*") {
                console.log(`${N} ${operator} ${M} = ${result} - ${evenOrOdd}`);                    
            } else if (operator === "/") {
                console.log(`${N} ${operator} ${M} = ${(result).toFixed(2)}`);        
            } else if (operator === "%") {
                console.log(`${N} ${operator} ${M} = ${result}`);
        }       
    }
}

calculate(["10", "12", "+"]);
calculate(["10", "1", "-"]);
calculate(["7", "3", "*"]);
calculate(["123", "12", "/"]);
calculate(["10", "3", "%"]);
calculate(["112", "0", "/"]);
calculate(["10", "0", "%"]);