function calculateTime(input) {
    let competitor1Time = Number(input[0]);
    let competitor2Time = Number(input[1]);
    let competitor3Time = Number(input[2]);
 
    let sum = competitor1Time + competitor2Time + competitor3Time;
    let minutes = Math.trunc(sum / 60);
    let seconds = sum % 60;
 
    if (sum / 60 >= 1) {
     
     if (seconds < 10) {
         console.log(`${minutes}:0${seconds}`);        
     } else {
         console.log(`${minutes}:${seconds}`);        
     }
    }  else {
         if (seconds < 10) {
             console.log(`0:0${seconds}`);
         } else {
             console.log(`0:${seconds}`);            
         }      
    }   
 }
 
 calculateTime(["35", "45", "44"]);
 calculateTime(["22", "7", "34"]);
 calculateTime(["50", "50", "49"]);
 calculateTime(["14", "12", "10"]);
 calculateTime(["0", "0", "0"]);
 calculateTime(["-1", "13", "-8"]);