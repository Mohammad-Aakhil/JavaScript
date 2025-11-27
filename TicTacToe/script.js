let player_1 = document.querySelector('.player-1')
let player_2 = document.querySelector('.player-2')
let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msgContainer')
let greeting = document.querySelector('#greet')


let turnX = true;
let playerTurn = () => player_1.style.backgroundColor = 'green'
const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add('hide')
    playerTurn()
    player_2.style.backgroundColor = 'white'
};

resetButton.addEventListener('click', resetGame)
newGameBtn.addEventListener('click', resetGame)

boxes.forEach( (box) => {
    box.addEventListener('click', () => {
        console.log('button clicked')
        if (turnX){
            box.innerText = 'X';
            box.style.backgroundColor = 'red'
            player_1.style.backgroundColor = 'white'
            player_2.style.backgroundColor = 'green'
            turnX = false;
        }else{
            box.innerText = 'O'
            box.style.backgroundColor = 'blue'
            player_1.style.backgroundColor = 'green'
            player_2.style.backgroundColor = 'white'
            turnX = true
        }box.disabled = true;
        checkWinner();
    });
});


disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
};


enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = ''
        box.style.backgroundColor = 'white'
    }
};


// msgContainer = document.getElementById('msgContainer')
let showWinner = (winner) => {
    let WinnerName = (winner == 'X') ? 'Player 1' : 'Player 2'
    greet.innerText = `Congratulations, ${WinnerName} win!`
    msgContainer.classList.remove('hide')
    disableBoxes();
};


let checkWinner = () => {
    for (let pattern of winningPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('Winner', pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}
