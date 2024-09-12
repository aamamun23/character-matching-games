

function showTheCurrentText(elementId){
    
}


//Get text value
function getTextElementValueById(elementId){
    const elementText = document.getElementById(elementId).innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}


//set text value 
function setTextElementValueById(elementId, elementValue){
    const elementText = document.getElementById(elementId);
    elementText.innerText = elementValue;
}


//Game over 
function gameOver(){
    hideElementById('home-screen');
    hideElementById('game-screen');
    showElementById('score-screen');

    //Reset Life
    setTextElementValueById('life', 5);

    //Set Final Score
    const currentScore = getTextElementValueById('score');
    setTextElementValueById('final-score', currentScore);
    
    //Reset score
    setTextElementValueById('score', 0);
}

function checkTheKeyPressed(event){
    const pressedKey = event.key;

    //Current Text
    const currentKeyElement = document.getElementById('showed-text').innerText;
    const currentText = currentKeyElement.toLocaleLowerCase();
    //console.log(currentText);
    removeBackgroundColor(currentText);

    if(pressedKey === "Escape"){
        gameOver();
    }

    if(pressedKey === currentText){
        //Remove current key background color
        removeBackgroundColor(currentText);


        //Update score
        const currentScore = getTextElementValueById('score');
        const score = currentScore + 1;
        
        setTextElementValueById('score', score);

        //Continue Game
        continueGame();
    }else{
        const lifeScore = getTextElementValueById('life');
        const life = lifeScore - 1;
        setTextElementValueById('life', life);
        if(life > 0){
            continueGame();
        }else{
           gameOver();
        }
        //Life
        

       
    }
}
document.addEventListener('keyup', checkTheKeyPressed);

function continueGame(){
    const alphabet = getRandomAlphabet();
    //console.log(alphabet);

    // showTheCurrentText('showed-text');
    const currentText = document.getElementById('showed-text');
    currentText.innerText = alphabet;

    setBackgroundColor(alphabet);
    
}
function play(){
    hideElementById('home-screen');
    showElementById('game-screen');
    hideElementById('score-screen');
    continueGame();
}