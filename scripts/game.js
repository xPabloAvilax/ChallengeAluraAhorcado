var palabra;
//funcion para iniciar el juego
function iniciarJuego(){
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".entrada-juego").style.display = "";
    document.querySelector(".mensaje").style.display = "none";

    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}

//palabras del juego

let palabras = [
    "AHORRO",
    "MOUSE",
    "PUERTA",
    "MONO",
    "OBJETO",
    "PISO",
    "CODIGO",
    "EDITOR",
    "SONIDO",
    "EDITOR",
    "DISEÑO",
    "WEB"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

//AGREGAR PALABRA

function agregarPalabra() {
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "flex"; 
    document.querySelector(".juego").style.display = "none"; 
    
    var btnGuardarEmpezar = document.querySelector(".btn-guardar-empezar");
    btnGuardarEmpezar.addEventListener("click", function(event) {
        var entrada = document.querySelector(".input-palabra-nueva");
        var valor = verificarPalabra(entrada.value);
        if(valor) {
            palabras.push(entrada.value);
            console.log(palabras);
            iniciarJuego();
        }
    });

    var btnCancelar = document.querySelector(".btn-cancelar");
    btnCancelar.addEventListener("click", function(event) {
        document.querySelector(".btns-inicio").style.display = "flex";
        document.querySelector(".palabra-nueva").style.display = "none"; 
        document.querySelector(".juego").style.display = "none";
    })
}

//FIN DEL JUEGO

function vFin() {
    if(finJuego) {
        document.querySelector("canvas").style.display = "none";
        document.querySelector(".entrada-juego").style.display = "none";
        document.querySelector(".mensaje").style.display = "";
        document.querySelector(".mensaje").textContent = mensaje;
        document.querySelector(".mensaje").style.color = colorMensaje;
    }
}