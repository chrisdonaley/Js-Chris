class GestionarPizzas {

    iniciar() {

        pizzas = [

            {
                "id": 1,
                "gusto": "Aceituna",
                "descripcion": "Pizza con aceitunas, tamaño grande",
                "precio": 350,
                "img": "aceituna.jpg",
            },
            {
                "id": 2,
                "gusto": "Caprese",
                "descripcion": "Pizza Caprese, tamaño grande",
                "precio": 370,
                "img": "caprese.jpg",
            },

            {
                "id": 3,
                "gusto": "Muzzarella",
                "descripcion": "Pizza Muzzarella, tamaño mediano",
                "precio": 250,
                "img": "i3.png",
            },
            {
                "id": 4,
                "gusto": "Cheddar",
                "descripcion": "Pizza Muzzarella con cheddar, tamaño mediano",
                "precio": 300,
                "img": "cheddar.jpg",
            }

        ]
    }

    cargarPizzas (pizzas){
        const divPizzas = document.querySelector("#pizzas");
        divProductos.innerHTML = "";

        if (pizzas.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            pizzas.forEach((pizza) => {


                const {id,gusto,precio,img,descripcion} = pizza

                let prod = document.createElement("div");
                prod.classList.add();
                prod.id = "row_"+id;
                prod.innerHTML = `<div class="w-20">
                                    <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                </div>

                                <div class="p-3 d-flex flex-column w-60 h-150">
                                <h3>${nombre}</h3>                                            
                                <p>${descripcion.substring(0,120)}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                <p class="precio">$${precio}</p>
                                <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                </div>`;


                divProductos.appendChild(prod);



            });
    }
}

buscar(valor) {

    let resultado = pizzas.filter(pizza =>
        pizzas.gusto.toLowerCase().includes(valor.toLowerCase()) ||
        pizza.descripcion.toLowerCase().includes(valor.toLowerCase()));
    this.cargarProductos(resultado);


}


addCart(item){


    const existe = carrito.some(pizza => pizza.id === item.id) ;

    if (existe){


        const articulo = carrito.map(pizza=>{

            if (pizza.id === item.id){


                pizza.cantidad++;
                return pizza;

            }else{

                return pizza ;

            }


        })

        Toastify({

            text : "Se actualizo la cantidad del producto",
            duration: 2000 ,
            gravity: "bottom"

       }).showToast();
       

    }else{


        carrito.push(item);

        Toastify({

            text : "Producto agregado con exito",
            duration: 2000 ,
            gravity: "bottom"

       }).showToast();


    }


    this.actualizarCarrito();

}

actualizarCarrito(){

    this.actualizarContador();
    this.mostrarCarrito();

    this.guardarCarrito();


}

}