let carritoPizzas = [];
let pizzas = new Array ();

let gestor ;

const key_carrito = "carrito";

document.addEventListener("DOMContentLoaded",()=>{

    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;

    gestor = new GestionarPizzas() ;
    gestor.iniciar();

})

document.querySelector("#buscar").addEventListener("keyup",()=>{

    let pal = document.querySelector("#buscar").value ;
 
    if (pal.length >= 2){
 
     gestor.buscar(pal);
 
    }else{
 
     gestor.mostrarHeader("Todos los productos en stock");
     gestor.cargarProductos(pizzas);
 
 
    }
 })

 function añadirpizza(id){

    const prod = document.querySelector("#row_"+id);

    let gusto = prod.querySelector('h3').textContent;

    let precio = prod.querySelector(".precio").textContent.substring(1,prod.querySelector(".precio").textContent.length);
    let img =  prod.querySelector("img").src;
    let pizza = new Pizza (id, gusto, precio, tamaño, img);

    gestor.addCart(pizza);

}

function eliminar(id){
    gestor.eliminarProducto(id);
}