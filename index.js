const buttonDark = document.getElementById('darkMode')
const buttonLight = document.getElementById('lightMode')
const container = document.querySelector(".container")

function darken(){
     container.style.backgroundColor = 'black'
     container.style.color = 'white'
}
function lighten(){
     container.style.backgroundColor = 'white'
     container.style.color = 'black'
}

buttonDark.addEventListener('click', darken)
buttonLight.addEventListener('click', lighten)