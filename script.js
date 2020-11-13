// variable to track which player goes next
let player;
let startPlayer;

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


// create function to update current player
const playerTurn = () => {
    // If number = 0, O is up; If number = 1, X is up
    startPlayer == 0 ? player = "O" : player = "X";
    //console.log(player);
}

// QuerySelector for reset button
let reset = document.querySelector('#reset');


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

    win();
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

    win();
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

    win();
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

    win();
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

    win();
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

    win();
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

    win();
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

    win();
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

    win();
})


// Created a function called win that goes through each possible win combination for X and O //
// If cells a1, a2, a3 are "X", player x wins, etc.. //
// Added location.reload(); which reloads page after win //
const win = function() {
  // Column A //
  if (a1.textContent === "X" && a2.textContent === "X" && a3.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1;
    scoreBoard();
    reset.disabled=false;
  }
  if (a1.textContent === "O" && a2.textContent === "O" && a3.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Column B //
  if (b1.textContent === "X" && b2.textContent === "X" && b3.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (b1.textContent === "O" && b2.textContent === "O" && b3.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Column C //
  if (c1.textContent === "X" && c2.textContent === "X" && c3.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (c1.textContent === "O" && c2.textContent === "O" && c3.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Row 1 //
  if (a1.textContent === "X" && b1.textContent === "X" && c1.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (a1.textContent === "O" && b1.textContent === "O" && c1.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Row 2 //
  if (a2.textContent === "X" && b2.textContent === "X" && c2.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (a2.textContent === "O" && b2.textContent === "O" && c2.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Row 3 //
  if (a3.textContent === "X" && b3.textContent === "X" && c3.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (a3.textContent === "O" && b3.textContent === "O" && c3.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Diagonal a1, b2, c3 //
  if (a1.textContent === "X" && b2.textContent === "X" && c3.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (a1.textContent === "O" && b2.textContent === "O" && c3.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }

  // Diagonal a3, b2, c1 //
  if (a3.textContent === "X" && b2.textContent === "X" && c1.textContent === "X") {
    alert("Player X has won.");
    //location.reload();
    x_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
  if (a3.textContent === "O" && b2.textContent === "O" && c1.textContent === "O") {
    alert("Player O has won.");
    //location.reload();
    o_wins += 1
    scoreBoard();
    reset.disabled=false;
  }
};

// Create a function for start of game
const start = () => {
    // Create Starting Player Variable
    // Create random number generator, generate num between 0 and 1
    // Store randomly generated number in starting player variable
    startPlayer = Math.round(Math.random() * 1);

    // reset divs to empty
    a1.textContent = "";
    a2.textContent = "";
    a3.textContent = "";
    b1.textContent = "";
    b2.textContent = "";
    b3.textContent = ""; 
    c1.textContent = "";
    c2.textContent = "";
    c3.textContent = "";

    //call playerTurn function
    // If number = 0, O is up; If number = 1, X is up
    startPlayer == 0 ? player = "O" : player = "X";
    //console.log(player);

    // Call scoreBoard Function
    scoreBoard();

    reset.disabled = true;
};

reset.addEventListener('click', function () {
  start();
});

start();
