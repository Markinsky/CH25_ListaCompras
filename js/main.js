// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumero = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
});

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML ="";
    alertValidaciones.style.display = "none";
    let lista = "Los siguientes campos deben estar llenados correctamente <ul>";
    if(txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        //alertValidacionesTexto.innerHTML = "Se debe escribir un nombre ";
        lista += "<li> Se debe escribir un nombre valido </li>";
        alertValidaciones.style.display = "block";
    }else{  
        txtNombre.style.border=""; 
    }
    if(txtNumero.value.length==0){
        txtNumero.style.border="solid thin red";
       // alertValidacionesTexto.innerHTML += "Se debe escribir un numero";
       lista += "<li> Se debe escribir una cantidad valida </li>";
        alertValidaciones.style.display = "block";
    }else{
        txtNumero.style.border=""; 
    }
    lista+="</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
});

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});