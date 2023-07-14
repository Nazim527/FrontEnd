let text = document.querySelector('.text')
let words = document.querySelector('.words')
let characters= document.querySelector('.characters')

text.addEventListener('input', () => {
  characters.textContent = text.value.length;
  var txt = text.value;
  words.textContent = txt.split(/\s+/).filter((item)=>item).length
})