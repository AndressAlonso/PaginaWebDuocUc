function validarInput(inputID) {
    let input = document.getElementById(inputID);
   input.addEventListener("keyup",function(){
    if (validarCampo(input)) {
        input.classList.add("correct");
        input.classList.remove("incorrect");
    } else {
        input.classList.add("incorrect");
        input.classList.remove("correct");
    }
   })
   
}
function validarCampo(input) {
    switch (input.id) {
        case "FormControlNombre":
        case "FormControlApellido":
            return input.value.length >= 3; 
        case "FormControlRut":
            return validarRut(input.value); 
        case "FormControlTelefono":
            return /^\d{9}$/.test(input.value); 
        case "FormControlEmail":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value); 
            return input.value != "-1"; 
        case "FormControlBoleta":
            return input.value.length >= 6; 
        default:
            return true; 
    }
}

function validarRut(rut) {
    // Formato válido: 12345678-9
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) return false;

    let splitRut = rut.split('-');
    let numRut = splitRut[0];
    let digVerificador = splitRut[1].toLowerCase();

    // Calcula el dígito verificador esperado
    let suma = 0;
    let multiplo = 2;

    for (let i = numRut.length - 1; i >= 0; i--) {
        suma += parseInt(numRut.charAt(i)) * multiplo;
        if (multiplo < 7) multiplo++;
        else multiplo = 2;
    }

    let resto = suma % 11;
    let dvEsperado = 11 - resto;

    
    if (dvEsperado === 10) {
        if (digVerificador === 'k') return true;
    } else if (dvEsperado === 11 && digVerificador === '0') return true;
    else if (dvEsperado === parseInt(digVerificador)) return true;

    return false;
}

// Llamadas a la función validarInput para cada campo
validarInput("FormControlNombre");
validarInput("FormControlApellido");
validarInput("FormControlRut");
validarInput("FormControlTelefono");
validarInput("FormControlEmail");
validarInput("id_lista_motivo");
validarInput("FormControlBoleta");

