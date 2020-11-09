// Create Starting Player Variable 
// Create random number generator, generate num between 0 and 1
// Store randomly generated number in starting player variable
let startPlayer = Math.round(Math.random() * 1);
console.log(startPlayer);

// If number = 0, O is up; If number = 1, X is up 
let player;
startPlayer == 0 ? player = "O" : player = "X"; 
console.log(player);
