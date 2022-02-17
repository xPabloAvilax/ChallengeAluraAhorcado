var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;

function vLetra(letra) {
    var esta = false;

    for(var i = 0; i < palabra.length; i++) {
        if(letra == palabra[i]) {
            dLetraCorrecta(letra, i + 1);
            ganaste++;
        }
        if(lUsadas.indexOf(letra) == -1) {
            if(letra == palabra[i]) {
                dLetraCorrecta(letra, i + 1);
                
                lUsadas.push(letra);
                if(ganaste == palabra.length) {
                    finJuego = true;
                    mensaje = "Ganaste, felicidades.";
                    colorMensaje = "green";
                    vFin();
                }
                esta = true;
            }
        }
    }
    if(!esta) {
        if(lUsadas.indexOf(letra) == -1) {
            errores++;
            dLetraIncorrecta(letra);
            lUsadas.push(letra);
            if(dHorca(errores) == false) {
                finJuego = true;
                mensaje = "Perdiste, lo siento.";
                colorMensaje = "red";
                vFin();
            }
        }
    }
    return esta;
}

function verificarPalabra(palabra) {
    if(palabra.length > 8 || palabra.length < 2) {
        return false;
    }
    for(var i = 0; i < palabra.length; i++) {
        switch(palabra[i]) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "Ñ":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                continue;
                break;
            default:
                return false;
                break;
        }
    }
    return true;
}

document.addEventListener("keyup", vTecla);

var errores = 0;
var lUsadas = [];

function vTecla(event) {
    var letra = event.key.toUpperCase();;
    
    if(vLetraCorrecta(letra)) {
        var indice = vLetra(letra);
    }

    /*if(!indice) {
        errores++;
        if(lUsadas.indexOf(letra) != -1) {
            dHorca(errores);
        }
    }*/
}

function vLetraCorrecta(letra) {
    var l = letra.toUpperCase();
    switch(l) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "Ñ":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            return true;
            break;
        default:
            return false;
            break;
    }
}