function createrandom() {
    var kdal = document.getElementById('kdal').value;
    var bdal = document.getElementById('bdal').value;
    var x = Math.round(Math.random() * (bdal - kdal)) + Number(kdal)

    document.getElementById('randomnumber').innerHTML = x;
  }