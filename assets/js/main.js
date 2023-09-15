const pizzaContent = document.getElementById("pizzasContent");
const cart = document.getElementById("verCarrito");
const cartaContainer = document.getElementById("cartaCont");

let carrito = []; //carrito vacio

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
}

pizzas.forEach((p) => { //creamos las cartas de cada producto
    const { id, nombre, precio, img, descripcion } = p;
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="./assets/img/${img}">
        <h3>${nombre}</h3>
        <p class="price">${precio}$</p>
        <p>${descripcion}</p>
    `;

    pizzaContent.append(content);

    let boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.className = "boton";

    content.append(boton);

    boton.addEventListener("click", () => { //aca vamos agregando los productos al carrito.
        const existeP = carrito.findIndex((item) => item.id === id);
        if (existeP !== -1) {
            carrito[existeP].cantidad += 1;
        } else {
            carrito.push({
                id: p.id,
                img: p.img,
                nombre: p.nombre,
                precio: p.precio,
                cantidad: 1, 
            });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        console.log(carrito);
        mostrarCarrito();
    });
});

verCarrito.addEventListener("click", () => {  //cuando presionamos para poder ver el carrito
    mostrarCarrito();
});

function mostrarCarrito() {  // funcion que muestra el carrito
    cartaContainer.innerHTML = "";
    cartaContainer.style.display = "flex";
    const carta = document.createElement("div");
    carta.className = "carta";
    carta.innerHTML = `
    <h1 class="carta-title">Compras</h1>
    `;
    cartaContainer.append(carta);

    const cartaboton = document.createElement("h1");
    cartaboton.innerText = "X";
    cartaboton.className = "carta-boton";

    cartaboton.addEventListener("click", () => { //para cerrar el carrito
        cartaContainer.style.display = "none";
    });

    carta.append(cartaboton);

    carrito.forEach((p) => {  //dentro el carrito, creamos la parte que los agrega y muestra para restar y los datos de los productos agregados.
        const { id, nombre, precio, img, descripcion, cantidad } = p;
        let comprasContent = document.createElement("div");
        comprasContent.className = "carrito-content";
        comprasContent.innerHTML = `
        <img src="./assets/img/${img}">
        <h3>${nombre}</h3>
        <p>$${precio} x ${cantidad}</p>
        <button class="restar" data-id="${id}">➖</button>
        `;

        const botonRestar = comprasContent.querySelector(".restar"); //boton de restar en el carrito.
        botonRestar.addEventListener("click", () => {
            const index = carrito.findIndex((item) => item.id === id);
            if (index !== -1) {
                if (carrito[index].cantidad > 1) {
                    carrito[index].cantidad -= 1;
                } else {
                    carrito.splice(index, 1);
                }
                mostrarCarrito();
            }
            
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

        cartaContainer.append(comprasContent);
    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total de la compra: $${total}`;
    cartaContainer.append(totalCompra);

    agregarBotonFinalizarCompra();
}
function agregarBotonFinalizarCompra() {        //agrega el boton finalizar compra, y también resetea el carrito, envia mensaje de si esta seguro que desea finalizar.
    if (!document.getElementById("finalizarCompraButton")) {
        const finalizarCompraButton = document.createElement("button");
        finalizarCompraButton.id = "finalizarCompraButton";
        finalizarCompraButton.innerText = "Finalizar Compra";

        finalizarCompraButton.addEventListener("click", () => {   // Confirmación con SweetAlert
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Una vez finalizada la compra, no se pueden realizar cambios.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, finalizar compra',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {// Si se confirma la compra
                    carrito = [];
                    localStorage.removeItem("carrito");
                    mostrarCarrito();
                    Swal.fire(  // Muestra un mensaje de éxito con SweetAlert
                        'Compra finalizada',
                        '¡Gracias por tu compra!',
                        'success'
                    );
                }
            });
        });

        cartaContainer.appendChild(finalizarCompraButton);
    }
}
