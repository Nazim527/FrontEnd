var number1,operators,number2,result,answer,True=0,False=0;
number1 = document.getElementById('number1')
operators = document.getElementById('operators')
number2 = document.getElementById('number2')
result = document.getElementById('result')
answer = document.getElementById('answer')
True = document.getElementById('True')
False = document.getElementById('False')

// Random Number Create
function RandomNumber(min, max) {
  var number = Math.floor(Math.random()*(max-min))+min;
  return number;
}

// Game start and Questions create function
function newQuestions() {
  var operation = ["+","-","*","/"];
  operators.textContent=operation[(RandomNumber(0,4))];
  number1.textContent=RandomNumber(0,50);
  number2.textContent=RandomNumber(0,50);

  if(operators.textContent==("/")) {
    while(true) {
      number2.textContent=RandomNumber(0,50);
      if(number1.textContent%number2.textContent==0) {
        break;
      }
    }
  }
}

// Page Load New questions start
window.onload =function() {
  newQuestions()
}

// Answer button click we correct answer
answer.onclick = function() {
  var ans,n1,n2;
  n1 = Number(number1.textContent);
  n2 = Number(number2.textContent);
  switch(operators.textContent) {
    case '+': ans=n1+n2;break;
    case '-': ans=n1-n2;break;
    case '*': ans=n1*n2;break;
    case '/': ans=n1/n2;break;
    default: break;
  }

  if(result.value==ans) {
    True.textContent = Number(True.textContent)+1;
  } else {
    False.textContent = Number(False.textContent)+1;
  }
  newQuestions()
}