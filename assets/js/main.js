const pizzaContent = document.getElementById("pizzasContent");
const cart = document.getElementById("verCarrito");
const cartaContainer = document.getElementById("cartaCont");

let carrito = [] ;

pizzas.forEach((p) => {
    const {nombre,precio,img,descripcion} = p;
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

    boton.addEventListener("click",()=>{
        carrito.push({
            id : p.id,
            img: p.img,
            nombre: p.nombre,
            precio: p.precio,
        });
        console.log(carrito);
    });

});

verCarrito.addEventListener("click", ()=>{
    cartaContainer.innerHTML="";
    cartaContainer.style.display = "flex";
    const carta = document.createElement("div");
    carta.className = "carta";
    carta.innerHTML = `
    <h1 class = "carta-title">Compras</h1>
    `;
    cartaContainer.append(carta);
    
    const cartaboton = document.createElement("h1");
    cartaboton.innerText = "X";
    cartaboton.className = "carta-boton";

    cartaboton.addEventListener("click", ()=>{
        cartaContainer.style.display = "none";
    });

    carta.append (cartaboton);


    carrito.forEach((p) => {
        const {nombre,precio,img} = p;
        let comprasContent = document.createElement("div");
        comprasContent.className = "carrito-content";
        comprasContent.innerHTML =`
        <img src="./assets/img/${img}">
        <h3>${nombre}</h3>
        <p>$${precio}</p>
        `

        cartaContainer.append(comprasContent);
    });

    const total = carrito.reduce((acc, prod)=> acc + prod.precio, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className= "total-content";
    totalCompra.innerHTML=`Total de la compra: $${total}`;
    cartaContainer.append(totalCompra);
});
