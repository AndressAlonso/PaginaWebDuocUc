function validarInput(inputID) {
    let input = document.getElementById(inputID);
   input.addEventListener("keyup",function(){
    if (validarCampos(input)) {
        input.classList.add("correct");
        input.classList.remove("incorrect");
    } else {
        input.classList.add("incorrect");
        input.classList.remove("correct");
    }
   })  
}
function validarCampos(input){
    switch (input.id) {
        case "f.rut":
            return validarRut(input.value);
        case "f.telefonPrincipal":
            return /^\d{9}$/.test(input.value);
        case "f.email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value); 
            return input.value != "-1";
        case "f.nombre":
            return input.value.length >= 2; 
        case "f.nombredireccion":
            return input.value.length >= 2;
        case "f.direccion":
            return input.value.length >= 2;
        case "f.numerodireccion":
            return input.value.length >= 3;
        case "f.piso/oficina/apto/depto":
            return input.value.length >= 2;
        case "f.comuna":
            return input.value.length >= 2;
        case "f.region":
            return input.value.length >= 2;
        case "f.ciudad":
            return input.value.length >= 2;
        case "f.contraseña":
            return validarContraseña(input.value);
        case "f.confirmar.contraseña":
            return validarContraseña(input.value);      
        default:
            return true;     
    }

}
function validarRut(rut) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) return false;

    let splitRut = rut.split('-');
    let numRut = splitRut[0];
    let digVerificador = splitRut[1].toLowerCase();
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

function validarContraseña(contrasena){
    if (contrasena.length < 7) {
        return false; 
    }
    if (!/[A-Z]/.test(contrasena)) {
        return false;
    }
    if (!/[a-z]/.test(contrasena)) {
        return false;
    }
    if (!/\d/.test(contrasena)) {
        return false;
    }
    if (!/[!@#$%^&*()-_=+\[\]{}|;:,.<>?/]/.test(contrasena)) {
        return false; 
    }

    return true;
}

validarInput("f.rut");
validarInput("f.telefonPrincipal");
validarInput("f.email");
validarInput("f.nombre");
validarInput("f.nombredireccion");
validarInput("f.direccion");
validarInput("f.numerodireccion");
validarInput("f.piso/oficina/apto/depto");
validarInput("f.comuna");
validarInput("f.region");
validarInput("f.ciudad");
validarInput("f.contraseña");
validarInput("f.confirmar.contraseña");