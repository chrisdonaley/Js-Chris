function pedir_datos(){
    let nombre = prompt ("Ingrese su nombre: ");
    let apellido = prompt ("Ingrese su apellido: ");
    let direccion = prompt ("Ingrese su dirección para enviar su orden: ");
    corroboro_datos(nombre, apellido,direccion);
}

function corroboro_datos(nombre, apellido, direccion){
    if (nombre == ""){
        alert("Debe ingresar un nombre válido")
        } else if (apellido == ""){
        alert("Debe ingresar un apellido válido")
        } else {
        
        if (direccion == "") {
            alert(nombre + " debe ingresar la dirección en la cual desea recibir su pedido")
        } else {alert("Sr "+ nombre + " " + apellido + " elija lo que desea pedir, para enviarlo a la brevedad a :"+ direccion)}
    }
}


