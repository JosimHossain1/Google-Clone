// All Selector

const inputValue = document.querySelector('#input')
const dotIcon = document.querySelector('#dot__icon')
const account = document.querySelector('#accounts')
const dotBox = document.querySelector('.dotBox')
const full = document.querySelector('.full')
const icoBox = document.querySelector('#icoBox')

// Searching System
const voiceIcon = document.querySelector('#voice')
inputValue.addEventListener('keydown', e=>{
    if(e.code === 'Enter'){
        search()
    }
})

// Search Function
function search(){
    const newVal = inputValue.value
    window.location.href = `https://www.google.com/search?q=${newVal}&oq=${newVal}&aqs=chrome..69i57j46i512j35i39l2j69i60l2j69i65j69i60.6128j0j1&sourceid=chrome&ie=UTF-8`
}

// Voice Search Function
const Func = (language)=>{
    let recognition = new webkitSpeechRecognition()
    recognition.lang = language
    recognition.onresult = (e)=>{
        document.querySelector('#input').value = e.results[0][0].transcript;
    }
    recognition.start()
        
}

// Toogle Button
dotBox.addEventListener('click', ()=>{
   var x = document.querySelector('.apps__box')
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  } 
})

// Account Box
account.addEventListener('click', ()=>{
   var x = document.querySelector('.user__icon')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})

