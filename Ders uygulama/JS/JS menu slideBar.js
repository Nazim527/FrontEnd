let Menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
Menutoggle.onclick = function() {
  Menutoggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
for(let i=0; i<list.length; i++) {
  list[i].onclick = function() {
    let j = 0;
    while (j<list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}