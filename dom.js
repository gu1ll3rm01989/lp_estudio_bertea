let boton = document.getElementById('mision-titulo')
let boton2 = document.getElementById('vision-titulo')
let boton3 = document.getElementById('valores-titulo')

let texto = document.getElementById('mision-texto')
let texto2 = document.getElementById('vision')
let texto3 = document.getElementById('valores')

let servicios = document.getElementById('servicios')

let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')



let switching = () => {
    if (texto.style.display === 'none') {
        texto.style.display = 'flex'
        servicios.style.marginTop = '300px'
    } else {
        texto.style.display = 'none'
        servicios.style.marginTop = '50px'
    }
}

let switching2 = () => {
    if (texto2.style.display === 'none') {
        texto2.style.display = 'flex'
        servicios.style.marginTop = '300px'
    } else {
        texto2.style.display = 'none'
        servicios.style.marginTop = '50px'
    }
}

let switching3 = () => {
    if (texto3.style.display === 'none') {
        texto3.style.display = 'flex'
        servicios.style.marginTop = '300px'
    } else {
        texto3.style.display = 'none'
        servicios.style.marginTop = '50px'
    }
}

boton.addEventListener('click', switching)
boton2.addEventListener('click', switching2)
boton3.addEventListener('click', switching3)