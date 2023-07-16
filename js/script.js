let carrito = [];

class Platos{
    constructor(id, comida, precio, descripcion, imagen){
        this.id = id;
        this.comida = comida;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

const platos = [
    new Platos(1, 'hamburguesa', 1200, 'hamburguesa con papas bien grande', './img/hamburguesa.jfif'),
    new Platos(2, 'tacos', 1600, 'tres tacos con un relleno riquisimo', './img/tacos.jfif'),
    new Platos(3, 'ensalada de sushi', 1350, 'ensalada de sushi DEL ORIENTE', './img/sushi.jfif'),
    new Platos(4, 'ratatuil', 950, 'ratauil colorido', './img/rata.jfif'),
    new Platos(5, 'brochet de camarones', 800, 'brochet maritimo', './img/brochet.jfif'),
    new Platos(6, 'picada fuerte', 5600, 'picada para 5 personas', './img/picada.jfif')
];

const plateContainer = document.querySelector('#plate-container');

platos.forEach(plato => {
    const platoDiv = document.createElement('div');
    platoDiv.innerHTML = `
    <article class="menu">
        <div class="info-comida">
            <img src="${plato.imagen}">
            <h2>${plato.comida}</h2>
            <p>$${plato.precio}</p>
            <p>${plato.descripcion}</p>
        </div>
        <button class="boton-carrito">Agregar al carrito</button>
    </article>
    `;

    plateContainer.appendChild(platoDiv);


    const cartBtn = platoDiv.querySelector('.boton-carrito');
    cartBtn.addEventListener('click', () => {

        carrito.push(plato);
        guardarCarrito(carrito); 
        mostrarCarrito()
    });
})    
    
function guardarCarrito(carrito){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito(){
    const modalContainer = document.getElementById('modal-container');
    // Esto se hace para ver si el carrito existe en el localStorage y si esta guardado
    const carritoSaved = localStorage.getItem('carrito');

    let totalPrice = 0;

    if (carritoSaved){
        const carritoParsed = JSON.parse(carritoSaved);
        modalContainer.innerHTML = ``;
        carritoParsed.forEach((plato, index) => {
            const platoDiv = document.createElement('div');
            platoDiv.innerHTML = ``;
            platoDiv.innerHTML = `
            <img src="${plato.imagen}">
                <div class="flex-modal-info">
                    <h2>${plato.comida}</h2>
                    <h3>${plato.descripcion}</h3>
                    <p>$${plato.precio}</p>
                </div>
            <button class="delete">Eliminar del carrito</button>
            `;

            modalContainer.appendChild(platoDiv);
            totalPrice += plato.precio;
        })
        
    const totalPriceElement = document.createElement('p');
    totalPriceElement.textContent = `Precio total: $${totalPrice}`;
    modalContainer.appendChild(totalPriceElement);
    }
    // delete plato
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', ()=> {
        deletePlate(index);
        platoDiv.remove();
        totalPrice -= plato.precio;
    });
}



    // const ulNav = document.querySelector('.ul-nav');
    // const li = document.createElement('li');
    // li.innerHTML = `
    //     <li class="contador">${carrito.length}</li>
    // `;
    
    // ulNav.appendChild(li);