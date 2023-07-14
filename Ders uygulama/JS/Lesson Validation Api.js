function validateForm() {
    var resultTrue, resultFalse, validateInput;
    resultTrue = document.getElementById('resultTrue');
    resultFalse = document.getElementById('resultFalse')
    validateInput = document.getElementById('number');
    if(validateInput.checkValidity()==false) {
      resultTrue.style.display="none";
      resultFalse.style.display="block";
      resultFalse.style.backgroundColor="red";
      resultFalse.style.padding = "10px"
      resultFalse.innerHTML = validateInput.validationMessage;
    } else {
      resultFalse.style.display="none";
      resultTrue.style.display="block";
      resultTrue.style.backgroundColor="green";
      resultTrue.style.padding = "10px"
      resultTrue.innerHTML = "Hic bir sorun gozukmedi"
    }
  }