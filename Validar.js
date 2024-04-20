function validarInput(inputID) {
    let input = document.getElementById(inputID);
   input.addEventListener("keyup",function(){
    if (input.value.length >= 6) {
        input.classList.add("correct");
        input.classList.remove("incorrect");
    } else {
        input.classList.add("incorrect");
        input.classList.remove("correct");
    }
   })
   
}

function getInputsID(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.id.substring(0,2) == "f."){
            validarInput(input.id);
        }else{
            console.log("No")
        }
        
    })
}   


document.addEventListener("DOMContentLoaded", function(){
    getInputsID();
});

