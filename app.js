console.log("This is the hangman's console");


guessButton.onclick = function () {
    let answer = document.getElementById('guess').value;
    
    document.getElementById('firstAnswer').innerHTML += answer;
    console.log(answer);
    document.getElementById('guess').value = "";
    
}

