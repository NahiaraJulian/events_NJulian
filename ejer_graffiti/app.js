const form = document.getElementById("formulario")
const input = document.getElementById("input_text1")
const color = document.getElementById("elegir_color")
const send = document.getElementById("send")

form.addEventListener("submit", (event) => {
    const wall = document.getElementById("wall")
    event.preventDefault()

    const textInput = crearDiv(event.target[0].value, wall)
   
    const color = colorearDiv(event.target[1].value, wall)
})


function crearDiv(texto, div) {
    const divGraffiti =  document.createElement(`div`)

    divGraffiti.setAttribute("id", "graffiti")
    divGraffiti.textContent = `${texto}`

    div.appendChild(divGraffiti)
}

function colorearDiv(color, div) {
    const divNuevo = div.children[1]
    
    divNuevo.className =`w-[300px] h-[300px] bg-[${color}]`
}

