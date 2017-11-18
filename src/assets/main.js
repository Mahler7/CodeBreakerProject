let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');
let code = document.getElementById('code');

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (answer.value === '' || attempt.value === '') {
    setHiddenFields();
  }
  if (!validateInput(input.value)){
    return false
  } else {
    attempt.value++;
  }
  if (getResults(input.value)){
    setMessage('You Win!!!');
    showAnswer(true);
    showReplay();
  } else if (attempt.value >= 10){
    setMessage('You Lose!!!');
    showAnswer(false);
    showReplay();
  } else {
    setMessage('Incorrect, Try Again.');
  }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while (answer.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt.value = 0;

  console.log('answer', answer);
  console.log('attempt', attempt);
}

function setMessage(text){
  message.innerHTML = text;
}

function validateInput(guess){
  if (guess.length === 4){
    return true
  } else {
    setMessage('Guesses must be exactly 4 characters long');
    return false
  }
}

function showAnswer(success){
  if(success){
    code.className += ' success'
  } else {
    code.className += ' failure'
  }
  code.innerHTML = answer.value;
}

function showReplay(){
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}

function getResults(guess){
  let html = '<div class="row"><span class="col-md-6">' + guess + '</span><div class="col-md-6">';
  for(i = 0; i < guess.length; i++){
    if(guess.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
    } else if (answer.value.indexOf(guess.charAt(i)) > -1){
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
  } 
  html += '</div></div>'
  results.innerHTML += html;
  if (guess === answer.value){
    return true
  }
  return false
}

//implement new functions here
// setHiddenFields();
guess();
