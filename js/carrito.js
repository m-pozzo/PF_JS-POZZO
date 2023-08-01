carritoBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        Toastify({
            text: "El carrito está vacío",
            className: "info",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #df4233, #f43933)",
            }
        }).showToast();
        modalContainer.style.display = 'none';
    } else {
        mostrarCarrito();
    }
});

let openModal = false;

function mostrarCarrito() {
    openModal = true;
    let totalPrice = 0;
    modalContainer.innerHTML = ``;
    const header = document.createElement('div');
    header.className = 'header-modal';
    header.innerHTML = `
        <h3 style="font-size: 1.7rem;">Carrito</h3>
        <span id="cerrarModal" class="cerrar-modal">❌</span>
    `;

    modalContainer.appendChild(header);

    // función para cerrar el modal
    const Close = () => {
        const cerrarModal = document.getElementById('cerrarModal');
        cerrarModal.addEventListener('click', () => {
            modalContainer.style.display = 'none';
        });
    };
    Close();

    const containerPlatoDivs = document.createElement('div');
    containerPlatoDivs.className = "container-platos";

    let platoDiv;

    carrito.map((plato) => {
        platoDiv = document.createElement('div');
        platoDiv.className = "flex-modal";
        platoDiv.innerHTML = ``;
        platoDiv.innerHTML = `
            <img src="${plato.imagen}" class="img-modal">
            <h2>${plato.comida}</h2>
            <span class="suma">+</span>
            <p><u>Cantidad</u>: ${plato.cantidad}</p>
            <span class="resta">-</span>
            <p>$${plato.precio * plato.cantidad}</p>
            <button class="delete">Eliminar del carrito</button>
            `;

        containerPlatoDivs.append(platoDiv);
        modalContainer.append(containerPlatoDivs);
        modalContainer.style.display = "flex";
        modalContainer.style.flexDirection = "column";
        modalContainer.style.justifyContent = "space-between";
        totalPrice += plato.precio * plato.cantidad;




        // aumentar cantidad de productos
        const sumar = platoDiv.querySelector('.suma');
        sumar.addEventListener('click', () => {
            plato.cantidad++;
            mostrarCarrito();
        });

        // restar cantidad de productos
        const restar = platoDiv.querySelector('.resta');
        restar.addEventListener('click', () => {
            if (plato.cantidad > 1) {
                plato.cantidad--;
                mostrarCarrito();
            }
        });

        // eliminar platos del carrito
        const deletePlato = platoDiv.querySelector('.delete');
        deletePlato.addEventListener('click', () => {
            const index = carrito.indexOf(plato);

            if (index !== -1) {
                if (plato.cantidad <= 1) {
                    carrito.splice(index, 1);
                    plato.cantidad++;
                }
                plato.cantidad--;
                guardarCarrito(carrito);
                carritoCounter();
                mostrarCarrito();
            }
        });
    });

    const footer = document.createElement('div');
    footer.innerHTML = `
        <p style="padding: 10px;">Precio total: <strong>$${totalPrice}</strong></p>
        <div>
            <button class="btn-finalizar">Comprar</button>
            <button class="btn-limpiar">Limpiar carrito</button>
        </div>
        `;
    footer.className = 'modalFooter';
    modalContainer.append(footer);

    // comprar los productos
    let comprarBtn = document.querySelector('.btn-finalizar');
    comprarBtn.addEventListener('click', () => {
        if (carrito.length > 0) {
            comprarBtn.disabled = true;

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2300,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: 'success',
                title: 'Compra realizada con exito',
                footer: `Ha pagado $${totalPrice}`
            })

            carrito = [];
            guardarCarrito(carrito);
            carritoCounter();
            modalContainer.style.display = 'none';
            openModal = false;

            setTimeout(() => {
                comprarBtn.disabled = false;
            }, 2300);
        }

    });

    let limpiarBtn = document.querySelector('.btn-limpiar');
    limpiarBtn.addEventListener('click', () => {
        if (carrito.length == 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2300,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: 'error',
                title: 'No hay productos en el carrito'
            })
        } else {
            carrito = [];
            guardarCarrito(carrito);
            carritoCounter();
            modalContainer.style.display = 'none';
            openModal = false;

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2300,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: 'success',
                title: 'Todos los productos fueron eliminados con exito',
            })
        }
    });
}

// contador de productos en el carrito
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};







