function printscreen() {
    var x=document.getElementById('number').value;
    if (isNaN(x)) {
        document.getElementById('result').innerHTML="Lutfen sadece sayi giriniz";
    } else {
        document.getElementById('result').innerHTML="Tebrikler girdiyiniz sayi dogru: " + x;
    }
}

function printScreen() {
    var x = document.getElementById('number1').value;
    if (isNaN(x)) {
        document.getElementById('result1').innerHTML = "Lutfen sayi giriniz"
    } else {
        document.getElementById('result1').innerHTML = "Tebrikler girdiniz sayi: " + x;
    }
}