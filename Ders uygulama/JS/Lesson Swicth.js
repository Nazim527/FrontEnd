function Show() {
    var takeAway = document.getElementById('take').value;
    var message = "";

    switch(takeAway) {
      case "JS":  message="Siz javaScript yazdiniz"; break;
      case "Java": message="Siz Java yazdiniz"; break;
      default: message="Duzgun bir yazi girmediniz";
    }

    document.getElementById('result').innerHTML=message;
  }