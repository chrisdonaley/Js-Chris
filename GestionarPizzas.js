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
                prod.innerHTML = ``;


                divProductos.appendChild(prod);



            });
    }
}


}