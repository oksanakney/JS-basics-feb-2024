function calculateHoursPerDay(input) {
    let pagesPerCurrBook = Number(input[0]);
    let pagesPerHours = Number(input[1]);
    let days = Number(input[2]);

    let readingTimePerBook = pagesPerCurrBook / pagesPerHours;
    let hoursPerDay = readingTimePerBook / days;

    console.log(hoursPerDay.toFixed(1));
}

calculateHoursPerDay(["212 ", "20 ", "2 "]);
calculateHoursPerDay(["432 ", "15 ", "4 "]);