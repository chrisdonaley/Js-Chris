const pizzaContent = document.getElementById("pizzasContent");
const cart = document.getElementById("verCarrito");
const cartaContainer = document.getElementById("cartaCont");

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
}

pizzas.forEach((p) => {
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

    boton.addEventListener("click", () => {
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

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

function mostrarCarrito() {
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

    cartaboton.addEventListener("click", () => {
        cartaContainer.style.display = "none";
    });

    carta.append(cartaboton);

    carrito.forEach((p) => {
        const { id, nombre, precio, img, descripcion, cantidad } = p;
        let comprasContent = document.createElement("div");
        comprasContent.className = "carrito-content";
        comprasContent.innerHTML = `
        <img src="./assets/img/${img}">
        <h3>${nombre}</h3>
        <p>$${precio} x ${cantidad}</p>
        <button class="restar" data-id="${id}">➖</button>
        `;

        const botonRestar = comprasContent.querySelector(".restar");
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
}
