function Calculator() {
    var selectorOperator = "";
    var leftPart = "";
    var rightPart = "";
    var numbers = document.querySelectorAll('.num');
    var operators = document.querySelectorAll('.operator');
    // click Number Selection
    for (var i=0; i < numbers.length; i++) {
      numbers[i].addEventListener("click", function() {

        document.getElementById('resultInner').textContent += this.value;

        if(selectorOperator=="") {
          leftPart += this.value;
        } 
        else if(selectorOperator!="") {
          rightPart += this.value;
        }

      },false);
    }

    // click Operator Selection
    for (var i=0; i< operators.length; i++) {
      operators[i].addEventListener('click',function() {

        document.getElementById('resultInner').textContent += this.value;
        selectorOperator = this.value;
        
      },false);
    } 

    // Equation click Selection
    document.getElementById('equation').addEventListener('click',function () {

      if(selectorOperator == "+") {
        document.getElementById('resultInner').textContent = parseInt(leftPart) + parseInt(rightPart);
      }
      else if(selectorOperator == "-") {
        document.getElementById('resultInner').textContent = parseInt(leftPart) - parseInt(rightPart);
      }
      else if(selectorOperator == "*") {
        document.getElementById('resultInner').textContent = parseInt(leftPart) * parseInt(rightPart);
      }
      else if(selectorOperator == "/") {
        document.getElementById('resultInner').textContent = parseInt(leftPart) / parseInt(rightPart);
      }

    },false);

    // Delete click Selection  
    document.getElementById('delete').addEventListener('click',function(){
    
    selectorOperator = "";
    leftPart = "";
    rightPart = "";
    document.getElementById('resultInner').innerHTML = ''

    },false);
  }

  window.onload = function() {
    Calculator();
  }