class GestionarProductos {

    iniciar() {

        productos = [

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
                "img": "muzza.jpg",
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



    cargarProductos(productos) {

        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        if (productos.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            productos.forEach((producto) => {

                const {id,gusto,precio,img,descripcion} = producto

                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.id = "row_"+id;
                prod.innerHTML =`<div class="w-20">
                                    <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                </div>

                                <div class="p-3 d-flex flex-column w-60 h-150">
                                <h3>${gusto}</h3>                                            
                                <p>${descripcion.substring(0,120)}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                <p class="precio">$${precio}</p>
                                <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                </div>


                                `;


                divProductos.appendChild(prod);



            });


        }




    }


    mostrarHeader(msg) {


        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML = msg;

    }


    buscar(valor) {

        let resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
        this.cargarProductos(resultado);


    }

    addCart(item){


        const existe = carrito.some(producto => producto.id === item.id) ;

        if (existe){


            const articulo = carrito.map(producto=>{

                if (producto.id === item.id){


                    producto.cantidad++;
                    return producto;

                }else{

                    return producto ;

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



    mostrarCarrito(){

        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "" ;
        let total = 0 ;

        carrito.forEach ((producto) =>{


            const { id, gusto, precio, img, cantidad  } = producto;

            const row = document.createElement("div");
            row.classList.add("row");
            total += parseInt(precio) * cantidad;

            row.innerHTML= `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${gusto}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${precio}
                        </div>  
                        
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${cantidad}
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                        <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-square-minus fa-2x"></i>
                        </a>
                    </div>

            
                        `;



                detalleCarrito.append(row);         

        })

        let row =document.createElement ("div");
        row.classList.add("row");

        row.innerHTML = `
                    <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                        Total a pagar:
                    </div>
                    <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                        <b> $ ${total}</b>
                    </div>
                    
                    `;      
                        

        detalleCarrito.appendChild(row);               


    }



    actualizarContador(){

        let totalCarrito = this.contarProductos();

        let countCarrito = document.querySelector("#badgeCarrito");
        countCarrito.innerHTML = totalCarrito;

    }

    contarProductos(){

        let contarProductos = 0 ;

        carrito.forEach ((producto) =>{

            contarProductos = contarProductos + parseInt(producto.cantidad);

        })


        return contarProductos ;


    }


    eliminarProducto(id){


        Swal.fire({

            title : "Esta seguro de eliminar el producto ?" ,
            showCancelButton : true ,
            cancelButtonColor : '#d33' ,
            confirmButtonText : "Si, eliminarlo",
            cancelButtonText : "Cancelar, deseo llevarlo!",

        }).then ((result) =>{


            if (result.isConfirmed){

                carrito=carrito.filter(articulo => articulo.id != id);
                this.actualizarCarrito();

                Toastify({

                    text : "Producto eliminado de la lista",
                    duration: 2000 ,
                    gravity: "bottom"
    
            }).showToast();

            }


        })



    }

    guardarCarrito(){

        localStorage.setItem(key_carrito, JSON.stringify(carrito));
        let date = new Date();        
        localStorage.setItem(key_actualizacion,date);
    }
}