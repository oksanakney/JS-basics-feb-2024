function calculateTicketPrice(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    if (type === "Premiere") {
        price = 12;
    } else if (type === "Normal") {
        price = 7.5;
    } else {
        price = 5;
    }

    totalPrice = price * rows * columns;
    console.log(totalPrice.toFixed(2));
}

calculateTicketPrice(["Premiere", "10", "12"]);
calculateTicketPrice(["Normal", "21", "13"]);
calculateTicketPrice(["Discount", "12", "30"]);