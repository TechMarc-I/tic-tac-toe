// Create win counter
    // Create win count variables for x and o
    let x_wins = 0;
    let o_wins = 0;
    // Create querySelector for score div
    let score = document.querySelector('#score');
    // Create querySelector for x wins and o wins
    let x_score = document.querySelector('#x_score');
    let o_score = document.querySelector('#o_score');

    // Place current scores in score board 
    // Create score board function; 
    const scoreBoard = () => {
        x_score.textContent = `X Wins: ${x_wins}`;
        o_score.textContent = `O Wins: ${o_wins}`; 
    };

// Create a function for start of game
const start = () => {
    // Create Starting Player Variable 
    // Create random number generator, generate num between 0 and 1
    // Store randomly generated number in starting player variable
    let startPlayer = Math.round(Math.random() * 1);
    console.log(startPlayer);

    // If number = 0, O is up; If number = 1, X is up 
    let player;
    startPlayer == 0 ? player = "O" : player = "X"; 
    console.log(player);

    // Call scoreBoard Function 
    scoreBoard();
};

start();