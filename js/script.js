// Transcisión para realiza un desplazamiento vertical en la página
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});



//---------------------------FUNCIONES--------------------//

// Simulación de productos


const imagencargar1 = "img/producto1.jpg"
const imagencargar2 = "img/producto2.jpg"
const imagencargar3 = "img/producto3.jpg"
//Foto de Patty Zavala en Unsplash
const imagencargar4 = "img/producto4.jpg"
//Foto de Miao Xiang en Unsplash
const imagencargar5 = "img/producto5.jpg"
//Imagen de <a href="https://www.freepik.es/foto-gratis/arreglo-aretes-dorados-esteticos-flat-lay_33533515.htm#query=aretes&position=10&from_view=search&track=sph">Freepik</a>
const imagencargar6 = "img/producto6.jpg" 
//Foto de Dids: https://www.pexels.com/es-es/foto/anillo-con-diamantes-1302307/
const imagencargar7 = "img/producto7.jpg"
//Imagen de simgahye en Pixabay
const imagencargar8 = "img/producto8.jpg" 

const productos = [
  { id: 1, nombre: "Manilla dorada en trenza", precio: 25.999,  img: imagencargar1},
  { id: 2, nombre: "Aretes perlita", precio: 16.999, img: imagencargar2 },
  { id: 3, nombre: "Collares de amistad", precio: 45.999, img: imagencargar3 },
  { id: 4, nombre: "Collar corazón Zafiro", precio: 30.999, img: imagencargar4 },
  { id: 5, nombre: "Anillo cruzado", precio: 22.999, img: imagencargar5 },
  { id: 6, nombre: "Candongas doradas", precio: 23.999, img: imagencargar6 },
  { id: 7, nombre: "Anillo diamantes", precio: 31.999, img: imagencargar7 },
  { id: 8, nombre: "Manillas perlitas", precio: 42.999, img: imagencargar8 },
];

// Función para mostrar los productos en la tienda
function mostrarProductos() {
  const productosContainer = document.getElementById("productos");
  productosContainer.innerHTML = "";

  productos.forEach(producto => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("col-md-3");
    productoElement.innerHTML = `
        <div class="card container-products  text-center ">
          <img src="${producto.img}" class="card-img-top " height="200">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>

          </div>
        </div>
    `;
    productosContainer.appendChild(productoElement);
  });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(item => item.id === id);
  if (producto) {
    console.log(`Producto "${producto.nombre}" con ID ${id} agregado al carrito.`);

    // Incrementa el contador del carrito
    var carritoCount = document.getElementById('carritoCount');
    carritoCount.textContent = parseInt(carritoCount.textContent) + 1;

    // Muestra la notificación
    alert('¡Producto agregado al carrito!');
  }
}

// Mostrar los productos al cargar la página
mostrarProductos();