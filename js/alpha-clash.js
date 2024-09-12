

function showTheCurrentText(elementId){
    
}


function checkTheKeyPressed(event){
    console.log(event.key);
}

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    // showTheCurrentText('showed-text');
    const currentText = document.getElementById('showed-text');
    currentText.innerHTML = alphabet;

    setBackgroundColor(alphabet);

    document.addEventListener('keyup', checkTheKeyPressed(event));

    
    
}
function play(){
    hideElementById('home-screen');
    showElementById('game-screen');
    continueGame();
}