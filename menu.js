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

    let respuesta = prompt("Que accion desea realizar ? \n1)Ver el menú \n2)Indicar nuevo precio \n3)Ordenar los las pizzas por precio \n4)Salir");


    if (respuesta == "1") {

        alert("Las pizzas que tenemos son: " + mostrar_pizzas())

    } else if (respuesta == "2") {

        actualizarPrecio();


    } else if (respuesta == "3") {


        ordenarArreglo();

        alert("Las pizzas son: " + mostrar_pizzas());

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
