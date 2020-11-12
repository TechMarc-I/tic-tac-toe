// variable to track which player goes next
let player;
let startPlayer;

// create function to update current player
const playerTurn = () => {
    // If number = 0, O is up; If number = 1, X is up
    startPlayer == 0 ? player = "O" : player = "X"; 
    //console.log(player);
}


// Variables to track each indiviual div
// Column A
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
//Column B
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
//Column C
let c1 = document.querySelector('#c1');
let c2 = document.querySelector('#c2');
let c3 = document.querySelector('#c3');

// Create click events to place either x or o
// on click, either an x or an o should appear in div
// after x or o appears, ready up next letter
// A1
a1.addEventListener('click', function () {
    a1.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    a1.style.pointerEvents = 'none';
})
// A2
a2.addEventListener('click', function () {
    a2.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    a2.style.pointerEvents = 'none';
})
// A3
a3.addEventListener('click', function () {
    a3.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    a3.style.pointerEvents = 'none';
})
// B1
b1.addEventListener('click', function () {
    b1.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    b1.style.pointerEvents = 'none';
})
// B2
b2.addEventListener('click', function () {
    b2.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    b2.style.pointerEvents = 'none';
})
// B3
b3.addEventListener('click', function () {
    b3.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    b3.style.pointerEvents = 'none';
})
// C1
c1.addEventListener('click', function () {
    c1.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    c1.style.pointerEvents = 'none';
})
// C2
c2.addEventListener('click', function () {
    c2.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    c2.style.pointerEvents = 'none';
})
// C3
c3.addEventListener('click', function () {
    c3.textContent = player; 

    if (startPlayer === 0) {
        startPlayer += 1;
    } else {
        startPlayer -= 1;
    };

    playerTurn();
    //console.log(startPlayer);

    c3.style.pointerEvents = 'none';
})





// Create win counter
    // Create win count variables for x and o
    let x_wins = 0;
    let o_wins = 0;
    // Create querySelector for score ul
    let score = document.querySelector('#score');
    // Create querySelector for x wins and o wins
    let x_score = document.querySelector('#x_score');
    let o_score = document.querySelector('#o_score');

    // Place current scores in score board 
    // Create score board function; 
    const scoreBoard = () => {
        x_score.innerHTML = `X Wins: ${x_wins}`;
        o_score.innerHTML = `O Wins: ${o_wins}`; 
    };

// Create a function for start of game
const start = () => {
    // Create Starting Player Variable 
    // Create random number generator, generate num between 0 and 1
    // Store randomly generated number in starting player variable
    startPlayer = Math.round(Math.random() * 1);
    //console.log(startPlayer);

    //call playerTurn function
    // If number = 0, O is up; If number = 1, X is up
    startPlayer == 0 ? player = "O" : player = "X"; 
    //console.log(player);

    // Call scoreBoard Function 
    scoreBoard();
};

start();