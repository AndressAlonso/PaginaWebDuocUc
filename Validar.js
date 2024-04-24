
function getInputsID(){
    const inputs = document.querySelectorAll('input');
    var inputlist = []; 
    inputs.forEach(input => {
        if (input && input.id.length > 0 && input.id != "f.rut-login" && input.id != "f.contraseña-login"){
            inputlist.push(input.id);
        }
    })
    console.log(inputlist)
    return inputlist;
}   


document.addEventListener("DOMContentLoaded", function(){
    getInputsID();

});

