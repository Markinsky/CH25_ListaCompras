// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumero = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let isValid = true;
let idTimeOut;
let precio = 0;
let contador = 0;
let totalEnProductos = 0;
let costoTotal = 0;

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

function validarCantidad(){
    if( (txtNumero.value.length==0) || (isNaN(txtNumero.value))||(parseFloat(txtNumero.value)<=0)){
        return false;
    }
    return true;
};

function setPrecio(){
    return Math.floor(Math.random() * 50 * 100) / 100;
};

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
});

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumero.value="";
    contadorProductos.innerText = "";

    contador = 0;
    totalEnProductos = 0;
    costoTotal = 0;
    productosTotal.innerText="0";
    precioTotal.innerText = "0";
    contadorProductos.innerText = "0";

    localStorage.setItem("contadorProductos", contador);
    localStorage.setItem("totalEnProductos", totalEnProductos);
    localStorage.setItem("costoTotal", costoTotal.toFixed(2));
    
});

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    isValid = true;
    clearTimeout(idTimeOut); 
    alertValidacionesTexto.innerHTML ="";
    alertValidaciones.style.display = "none";
    let lista = "Los siguientes campos deben estar llenados correctamente <ul>";
    if(txtNombre.value.length<2){
        txtNombre.style.border="solid thin red";
        //alertValidacionesTexto.innerHTML = "Se debe escribir un nombre ";
        lista += "<li> Se debe escribir un nombre valido </li>";
        alertValidaciones.style.display = "block";
    }else{  
        txtNombre.style.border=""; 
    }
    if(! validarCantidad()){
        txtNumero.style.border="solid thin red";
       // alertValidacionesTexto.innerHTML += "Se debe escribir un numero";
       lista += "<li> Se debe escribir una cantidad valida </li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }else{
        txtNumero.style.border=""; 
    }

    lista+="</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    idTimeOut = setTimeout(function(){
        alertValidaciones.style.display = "none";
    }, 5000);
    precio = setPrecio();
    contador ++;
    let row = `<tr> 
                <td>${contador}</td>
                <td>${txtNombre.value}</td>
                <td>${txtNumero.value}</td>
                <td>${precio}</td>
             </tr>`;
             cuerpoTabla[0].insertAdjacentHTML("beforeend",row);
             contadorProductos.innerText=contador;
             totalEnProductos += parseFloat(txtNumero.value);
             productosTotal.innerText=totalEnProductos;
             costoTotal += precio * parseFloat(txtNumero.value);
             precioTotal.innerText = `$ ${costoTotal.toFixed(2)}`;
             localStorage.setItem("contadorProductos",contador);
             localStorage.setItem("totalEnProductos", totalEnProductos);
             localStorage.setItem("costoTotal",costoTotal);
             txtNombre.value = "";
             txtNumero.value = "";
             txtNombre.focus();
});

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumero.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumero.value = txtNumero.value.trim();
});

window.addEventListener("load", function(){
    if( contador = localStorage.getItem("contadorProductos") == null){
        localStorage.setItem("contadorProductos", "0");
    }
    if(totalEnProductos = localStorage.getItem("totalEnProductos") == null){
        totalEnProductos = localStorage.setItem("totalEnProductos", "0");
    }
    if(costoTotal = localStorage.getItem("costoTotal") == null){
        costoTotal = localStorage.setItem("costoTotal", "0.0");
    }
    contador = parseInt(localStorage.getItem("contadorProductos"));
    totalEnProductos = parseInt(localStorage.getItem("totalEnProductos"));
    costoTotal = parseFloat(localStorage.getItem("costoTotal"));

    contadorProductos.innerText = contador;
    productosTotal.innerText= totalEnProductos;
    precioTotal.innerText = `$ ${costoTotal}`;
});