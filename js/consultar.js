// mensaje carrito
const mensajeCarrito = document.getElementById('mensaje');

const libros = [
    {
          "nombre" : "Lenguaje Java",
          "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi volupt Architecto, labore autem nobis assumenda dignissimos voluptatum fugiat suscipit voluptatem unde et.",
          "imagen" : "/img/java.webp",
          "precio" : 1250
    },
    {
          "nombre" : "Lenguaje Pyton",
          "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi volupt Architecto, labore autem nobis assumenda dignissimos voluptatum fugiat suscipit voluptatem unde et.",
          "imagen" : "/img/python.png",
          "precio" : 1850
    },
    {
          "nombre" : "Lógica de programación",
          "descripcion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repudiandae modi volupt Architecto, labore autem nobis assumenda dignissimos voluptatum fugiat suscipit voluptatem unde et.",
          "imagen" : "/img/logica.webp",
          "precio" : 2285
    }
]

let librosHtml = "";

for(let i=0; i < libros.length; i++) {

    librosHtml += `
            <section class="producto">
                <h2>${libros[i].nombre}</h2>
                <div class="libros"><img src=${libros[i].imagen}></div>
                <h2>Precio: $${libros[i].precio}</h2>
                <input class="btn-info" type="button" value="Ver + Info">
                <p>${libros[i].descripcion}</p>
                <input class="btn-agregar-carrito" type="button" value="Agregar al carrito">
            </section>
    `;
};

const contenedorLibros = document.getElementById("contenedorLibros");
contenedorLibros.innerHTML = librosHtml;

const btnAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
const listaCarrito = document.querySelector('#carrito ul');
const totalCarrito = document.querySelector('#carrito p');

let totalPagar = 0;

// recorremos el areglo de los botones agregar carrito
for(let i=0; i < btnAgregarCarrito.length; i++) {

    function agregarLibroCarrito(){
        const eLi = document.createElement("li");
        eLi.innerText = `
                Libro ${libros[i].nombre} $${libros[i].precio}
        `;

        listaCarrito.appendChild(eLi);

        totalPagar += libros[i].precio;

        totalCarrito.innerText = "Total a pagar: $" + totalPagar;

        mensajeCarrito.innerText = "";
    }

    btnAgregarCarrito[i].addEventListener("click", agregarLibroCarrito)
}

function borrarCarrito() {
    listaCarrito.innerText = "";
    totalCarrito.innerText = "Total  a pagar: $0";
    totalPagar = 0;
    mensajeCarrito.innerText = "";
};

const btnBorrar = document.querySelector('#btn-borrar');
btnBorrar.addEventListener('click', borrarCarrito);

// boton pagar
function pagarTotal(){
    if(listaCarrito.innerText === "") {
        mensajeCarrito.innerText = "Seleccionar un producto para abonar";
    }else {
        window.location.href = "/pagos.html";
    }
};

const btnPagar = document.querySelector('#btn-pagar');
btnPagar.addEventListener("click", pagarTotal);
