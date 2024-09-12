

//Show ElementById
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//Hide ElementById
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

//Get random characters
function getRandomAlphabet(){
    //random characters
    const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomAlphabets.split('');
    // console.log(randomArray);

    const randomNumber = Math.random() * (alphabets.length-1);
    const index = Math.round(randomNumber);
    // console.log(indexRounded); 
    // console.log(alphabets[index]); 
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
    //console.log(element);
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300');
}