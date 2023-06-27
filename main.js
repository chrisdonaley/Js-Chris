let nombre = prompt ("Ingrese su nombre: ");
let apellido = prompt ("Ingrese su apellido: ");
let edad = prompt ("Ingrese su edad: ");

if (nombre == ""){
    alert("Debe ingresar un nombre de usuario válido")
} else if (apellido == ""){
    alert("Debe ingresar un apellido válido")
} else {
    alert("Su nombre es " + nombre + " " + apellido + " y tiene " + edad + " años");
    if (edad <= 18) {
        alert(nombre + " usted es menor de edad, vuelva cuando cumpla la mayoría de edad")
    } else {alert("Sr "+ nombre + " " + apellido + " puede ingresar sin problemas, disfrute")}
}




let anionacimiento =  parseInt(prompt("Ingrese el año en que nació: "));


while (anionacimiento <= 2006){
    alert("Usted aún es menor de edad, no puede ingresar al local")
    anionacimiento =  parseInt(prompt("Ingrese el año en que nació: "))
}

