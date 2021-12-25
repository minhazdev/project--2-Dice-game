const inputElement = document.querySelector('#input');
const formElement = document.querySelector('form');
const winScoreElement = document.querySelector('.winning-score');
//const DisplayWinnerElement = document.querySelector('.dice-result')

const Btn1Element = document.querySelector('.Btn1');
const Btn2Element = document.querySelector('.Btn2');
const resetBtnElement = document.querySelector('.reset')

const p1ScoreElement = document.querySelector('.p1Score');
const p2ScoreElement = document.querySelector('.p2Score');


//data layer
//view layer(Dom)
let winScore = 10;
let p1Score = 0;
let p2Score = 0;
let turn = 'player1'

winScoreElement.textContent = winScore
p1ScoreElement.textContent = p1Score
p2ScoreElement.textContent = p2Score

formElement.addEventListener('submit', (e)=> {
    (e).preventDefault()
    const inputVal = +inputElement.value
    //validation
    if(inputVal === '' || inputVal<1){
      if(!document.querySelector('.invalid-input'))
      {formElement.insertAdjacentHTML('beforebegin' , '<p class="invalid-input">please input valid number</P>')
    }

    }else {
      if(document.querySelector('.invalid-input'))
      {
        document.querySelector('.invalid-input').remove()

      }
    //use Number here instead of + sign
    //setting data layer
    winScore = +inputElement.value    
    //setting view layer
    winScoreElement.textContent = winScore
    //console.log(inputElement.value)
    //clearing input value
    inputElement.value = ''  
    //change to all default state
    initialPlaystate()

    }
    
})
Btn1Element.addEventListener('click', (e) => {
    if (turn === 'player1'){
  p1Score++
  p1ScoreElement.textContent = p1Score
  turn = 'player2'
  Btn1Element.setAttribute('disabled' , 'disabled')
  Btn2Element.removeAttribute('disabled')
  //check winning state
  checkWinner()
  }
  })

   function checkWinner() {
   const isP1Winner = winScore === p1Score;
   const isP2Winner = winScore === p2Score;

if (isP1Winner || isP2Winner) {
    Btn1Element.setAttribute("disabled", "disabled");
    Btn2Element.setAttribute("disabled", "disabled");
    }
  
   displayWinner(isP1Winner,isP2Winner)
  }

  function displayWinner(p1WinState,p2Winstate){
    if(p1WinState) {
      formElement.insertAdjacentHTML('beforebegin' , '<p class="winnerMes">Player1 is Winner</p>')
    }else if(p2WinState){
      formElement.insertAdjacentHTML('beforebegin' , '<p class="winnerMes">Player2 is Winner</p>')

    }

  }

Btn2Element.addEventListener('click', e => {
    if (turn === 'player2'){
    p2Score++
    p2ScoreElement.textContent = p2Score
    turn = 'player1'
    Btn2Element.setAttribute('disabled' , 'disabled')
    Btn1Element.removeAttribute('disabled')
    }
  })
  
  resetBtnElement.addEventListener('click', e => {
     winScore = 10;
     initialPlaystate()
     
  })

  function initialPlaystate(){
     p1Score = 0;
     p2Score = 0;
     turn = 'player1'
     winScoreElement.textContent = winScore
     p1ScoreElement.textContent = p1Score
     p2ScoreElement.textContent = p2Score
     Btn1Element.removeAttribute('disabled')
     Btn2Element.removeAttribute('disabled')
     //reset winning message
     if(document.querySelector('.winnerMes')){
      document.querySelector('.winnerMes').remove()

     }
     
  }

  
  
  
      













