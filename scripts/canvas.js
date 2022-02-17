var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");

function limpiar() {
    pincel.clearRect(0, 0, 294, 360);
}

function dBase() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(0, 356);
    pincel.lineTo(294, 356);
    pincel.lineTo(294, 360);
    pincel.lineTo(0, 360);
    pincel.fill();
}

function dMastil() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(80, 360);
    pincel.lineTo(84, 360);
    pincel.lineTo(84, 0);
    pincel.fill();
}

function dTravesa() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(260, 0);
    pincel.lineTo(260, 4);
    pincel.lineTo(80, 4);
    pincel.fill();
}

function dSoga() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 0);
    pincel.lineTo(260, 50);
    pincel.lineTo(256, 50);
    pincel.lineTo(256, 0);
    pincel.fill();
}

function dCabeza() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.arc(258, 83/*Posición*/, 33/*Tamaño del radio*/, 0/*Angulo inicial*/, 2*3.14/*Angulo final*/);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(258, 83/*Posición*/, 29/*Tamaño del radio*/, 0/*Angulo inicial*/, 2*3.14/*Angulo final*/);
    pincel.fill();
}

function dTronco() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(260, 250);
    pincel.lineTo(256, 250);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dPieDerecho() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 250);
    pincel.lineTo(294, 310);
    pincel.lineTo(290, 310);
    pincel.lineTo(256, 250);
    pincel.fill();
}

function dPieIzquierdo() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(256, 250);
    pincel.lineTo(226, 310);
    pincel.lineTo(230, 310);
    pincel.lineTo(260, 250);
    pincel.fill();
}

function dManoDerecha() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(294, 175);
    pincel.lineTo(290, 175);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dManoIzquierda() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(256, 115);
    pincel.lineTo(222, 175);
    pincel.lineTo(226, 175);
    pincel.lineTo(260, 115);
    pincel.fill();
}

//dibujar la Horca

function dHorca(errores) {
    switch(errores) {
        case 1:
            dBase();
            break;
        case 2:
            dMastil();
            break;
        case 3:
            dTravesa();
            break;
        case 4:
            dSoga();
            break;
        case 5:
            dCabeza();
            break;
        case 6:
            dTronco();
            break;
        case 7:
            dPieDerecho();
            break;
        case 8:
            dPieIzquierdo();
            break;
        case 9:
            dManoDerecha();
            break;
        case 10:
            dManoIzquierda();
            return false;
            break;
        default:
            break;
    }
}

//letra correcta

function dLetraCorrecta(letra, position) {
    var letras = document.querySelector(".letra-" + position);
    letras.textContent = letra;
}
//letra incorrecta
function dLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letra-no");
    letraNo.textContent = letra;
    document.querySelector(".letras-no").appendChild(letraNo);
}

//mensaje 
function dMensaje(mensaje) {
    console.log(mensaje);
}

//mostrar guiones de palabra

function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".linea-" + i).style.display = "none";

        var letras = document.querySelector(".letras");
        while(letras.firstChild) {
            letras.removeChild(letras.firstChild);
        }

        var letrasNo = document.querySelector(".letras-no");
        while(letrasNo.firstChild) {
            letrasNo.removeChild(letrasNo.firstChild);
        }
    }

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letras").appendChild(letras);
    }
}