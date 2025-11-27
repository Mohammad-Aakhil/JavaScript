let UserScore = 0;
let CompScore = 0;

let dynUserScore = document.querySelector('#user-score')
let dynCompScore = document.querySelector('#comp-score')



let msg = document.querySelector('#msg');


let genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor']
    let ranIdx = Math.floor(Math.random() * 3)
    let selected = options[ranIdx]
    console.log(`Comp selected ${selected}`)
    return selected
}

let drawGame = () => {
    console.log('Same choice, game draw')
    msg.innerText = 'Same Choice, Game drawn'
    msg.style.backgroundColor = 'grey'
}



let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        UserScore++
        dynUserScore.innerText = UserScore
        console.log('You Win!')
        msg.innerText = `You Win!, ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }else{
        CompScore++
        dynCompScore.innerText = CompScore
        console.log('Bot Win!')
        msg.innerText = `You Lose!, ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}



let playGame = (userChoice) => {
    console.log(`User choose ${userChoice}`)
    let compChoice = genCompChoice()
    // console.log(compChoice)
    if (userChoice === compChoice){
        // console.log('Same Choice, Game drawn')
        drawGame()
    }else{
        let userWin = true;
        if (userChoice === 'rock'){
            //scissor or paper
            userWin = compChoice === 'scissor' ? true : false;
        }else if (userChoice === 'paper') { 
            //rock or scissor
            userWin = compChoice === 'scissor' ? false : true;
        //remaining scissor
        }else{
            //rock or paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
} 


let choices = document.querySelectorAll('.choice')
choices.forEach((choices) => {
    choices.addEventListener('click', () => {
        const userChoice = choices.getAttribute('id')
        // console.log(`${userChoice} was clicked`)
        playGame(userChoice)
    })
})

