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
                <a href="">Ver + Info</a>
                <h2>Precio: $${libros[i].precio}</h2>
                <p>${libros[i].descripcion}</p>
                <input class="agregarCarrito" id="btn-agrgar-carrito" type="button" value="Agregar al carrito">
            </section>
    `;
}


const contenedorLibros = document.getElementById("contenedorLibros");
contenedorLibros.innerHTML = librosHtml;
