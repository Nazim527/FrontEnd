function error() {
    let message, inputValue;
    inputValue = document.querySelector("#data").value;
    message = document.querySelector("#result");
    message.innerHTML = "";

    try {
        if(inputValue == "") throw "Bu alani bos qoymaq olmaz";
        if(isNaN(inputValue)) throw "Xahis olunur sadece reqem daxil edin";
        inputValue = Number(inputValue);
        if(inputValue<5) throw 'Xahis olunur 5`den yuxari bir reqem daxil edin'
    } catch (e) {
        message.innerHTML = e
    }
}