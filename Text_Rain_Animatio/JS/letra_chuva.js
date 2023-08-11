function randomText(){
    let letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+{}[];:,./<>?'
    letter = letras[Math.floor(Math.random() * letras.length)]
    return letter
}

function rain(){
    let cloud = document.querySelector('.cloud')
    let e = document.createElement('div')
    let left = Math.floor(Math.random() * 310)
    let size = Math.floor(Math.random() * 1.5)
    let duration = Math.random() * 2
    
    e.classList.add('rain')
    cloud.appendChild(e)
    e.innerHTML = randomText()
    e.style.left = left + 'px'
    e.style.fontSize = 0.5 + size + 'em'
    e.style.animationDuration = 1 + duration + 's'
    setTimeout(function(){
        cloud.removeChild(e) 
    }, 2000);
}

setInterval(function(){
    rain()
},10)