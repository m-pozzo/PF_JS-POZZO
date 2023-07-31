const carritoBtn = document.getElementById("ver-carrito");
const plateContainer = document.querySelector('#plate-container');
const modalContainer = document.getElementById('modalContainer');
const cantidadCarrito = document.getElementById('contadorCarrito');
const carritoGetLocal = localStorage.getItem("carrito");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

async function obtenerPlatos (){
    return fetch('../JSON/platos.json')
        .then (response => response.json())
        .then(plato => {
            const comida = plato.comida;
            const precio = plato.precio;
            const descripcion = plato.descripcion;
            const imagen = plato.imagen;

            plato.forEach( plato => {
                const platoDiv = document.createElement('div');
                platoDiv.innerHTML = `
                <article class="menu">
                    <div class="info-comida">
                        <img src="${plato.imagen}">
                        <h2>${plato.comida}</h2>
                        <p>$${plato.precio}</p>
                        <p>${plato.descripcion}</p>
                    </div>
                    <button class="agregar-carrito">Agregar al carrito</button>
                </article>
                `;
            
                plateContainer.appendChild(platoDiv);
            
                const agregarBtn = platoDiv.querySelector('.agregar-carrito');
                agregarBtn.addEventListener('click', () => {
                    const repetido = carrito.some((platoRepe) => platoRepe.id === plato.id);
                    if (repetido){
                        carrito.map((plate) => {
                            if (plate.id === plato.id){
                                plato.cantidad++;
                            }
                        });
                    } else {
                        carrito.push(plato);
                        guardarCarrito(carrito);
                        carritoCounter();
                        Toastify({
                            text: "Agregado al carrito!",
                            duration: 3000,
                            position: "left",
                            style: {
                                background: "linear-gradient(to right, #00b09b, #96c93d)",
                              }
                        }).showToast();
                    }
                });
                carritoCounter();
            })
        })
        .catch (err => {
            const bodyError = document.getElementById('bodyError');
            bodyError.innerHTML = `
                <h1 style="display:flex; flex-direction: column; align-items: center; justify-content: center; height: 400px;">
                Verificar error en la consola o recargue la página
                    <br><br> 
                    <a href="">Hablar con el administrador</a>
                </h1>
            `;
            Swal.fire({
                background: '#fff',
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!'
              });
        });
}

function guardarCarrito(carrito){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

obtenerPlatos(); 
