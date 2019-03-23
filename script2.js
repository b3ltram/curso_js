/**
 * https://threejs.org
 * http://vaalentin.github.io/2015/
 */

let dropzone = document.querySelector("#dropzone")
let input = document.querySelector("input")
let label = document.querySelector("label")

input.addEventListener("change",e=>{
    console.log("Agregaron un archivo a mano")
    manejarSubida(e.target.files)
})

dropzone.addEventListener("dragenter",e=>{
    e.preventDefault()
    console.log("Entraron al dropzone")
})

dropzone.addEventListener("dragleave",e=>{
    e.preventDefault()
    console.log("Salieron del dropzone")
})

dropzone.addEventListener("dragover",e=>{
    e.preventDefault()
    console.log("Encima del dropzone")
})

dropzone.addEventListener("drop",e=>{
    e.preventDefault()
    console.log("Me soltaron")
    manejarSubida(e.dataTransfer.files)
})


/**
     * URL.createObjectURL(Blob/File)
     * 
     * 1) Cada vez que me arrastren un archivo mostrarlo adentro del #dropzone junto con su nombre de archivo y su tamaño expresado
        en MB
     * 2) Ademas agregar un boton por fuera del dropzone que diga "cancelar"
     * 3) Agregarle un evento de click al boton que borre todo el contenido del dropzone y vuelva a mostrar el texto del label
     * 
     */

function manejarSubida(archivos){
    console.log(archivos)
    label.classList.add("hidden")


   //let url = URL.createObjectURL(archivos)

    let div = document.createElement("div")
    document.dropzone.appendChild(div)

    let img = document.createElement("img")
    img.src = url
    img.classList.add("reducir")
    document.div.appendChild(img)


}