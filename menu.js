class pizza {
    constructor(gusto, precio, tamaño){
    this.gusto = gusto;
    this.precio = precio;
    this.tamaño = tamaño;
}
    mostrar_descripcion_pizzas() {
        return this.gusto + " - " + this.tamaño + " tiene un valor de $ " + this.precio;
    }
    getPrecio() {
        return this.precio;
    }
}

let arreglo_pizzas = new Array();
arreglo_pizzas.push(new pizza ('Aceituna', 350, 'grande'));
arreglo_pizzas.push(new pizza ('Caprese', 400, 'grande'));
arreglo_pizzas.push(new pizza ('Cheddar', 300, 'mediana'));
arreglo_pizzas.push(new pizza ('Muzzarella', 250, 'mediana'));

function mostrarMenu() {

    let respuesta = prompt("Que accion desea realizar ? \n1)Ver el menú \n2)Realizar pedido \n3)Ordenar los las pizzas por precio \n4)Ingresar una nueva pizza\n5)Salir");


    if (respuesta == "1") {

        alert("Las pizzas que tenemos son: " + mostrar_pizzas());

    } else if (respuesta == "2") {

        alert("Las pizzas para ordenar son: " + mostrar_pizzas());
        let orden = prompt("Elija las que desee llevar:");
        if (orden == "1"){
            alert("Usted ha elegido la Pizza de Aceituna Grande, cuesta $350");
            pedir_datos();
        } else if (orden == "2"){
            alert("Usted ha elegido la Pizza Caprese Grande, cuesta $400");
            pedir_datos();
        }else if (orden == "3"){
            alert("Usted ha elegido la Pizza con Cheddar mediana, cuesta $300");
            pedir_datos();
        } else if (orden == "4"){
            alert("Usted ha elegido la Pizza Muzzarella mediana, cuesta $250");
            pedir_datos();
        }
    }else if (respuesta == "3") {


        ordenarArreglo();

        alert("Las pizzas son: " + mostrar_pizzas());


    } else if (respuesta == "4") {

        let nueva_pizza = prompt("Ingrese la nueva pizza que desea agregar");
        let nuevo_precio = prompt ("Ingrese el precio de la nueva pizza:");
        let nuevo_tamaño = prompt ("Ingrese el tamaño de la nueva pizza");
        arreglo_pizzas.push(new pizza (nueva_pizza, nuevo_precio, nuevo_tamaño));
    } else if (respuesta.toLowerCase() == "salir" ) {

        return respuesta.toLowerCase();
    } else {

        alert("Opcion invalida");

    }


    return respuesta;

}

function ordenarArreglo() {

    let forma = prompt("Se va  ordenar las pizzas segun su precio. \n Desea mostrarlos las más baratas primero  (bar) o las mas caras (car) ?")

    if (forma.toLowerCase() == "bar") {
        arreglo_pizzas.sort(function (a, b) {
            return a.getPrecio() - b.getPrecio();
        })
    } else if (forma.toLowerCase() == "car") {
        arreglo_pizzas.sort(function (a, b) {
        return b.getPrecio() - a.getPrecio();
        })
    } else {
        alert("Opcion invalida");
    }
}

function mostrar_pizzas() {

    let pizzas = "";
    for (let i = 0; i < arreglo_pizzas.length; i++) {
        pizzas += "\n" + arreglo_pizzas[i].mostrar_descripcion_pizzas();
    }
    return pizzas;
}
