alert("Bienvenido! Esto es un simulador de restaurante");
let cantidadPersonas = parseInt(prompt("Venis a comer solo o con gente? (Máximo de cuatro personas)\nHacemelo saber poniendo un numero\nEj: 2."));
alert("Perfecto. El menu es el siguiente:\n-empanada $180\n-milanesa $1100\n-ensalada $550\n-donas $150");


let total = 0;
let plato = "";
const comida = [];

const menu = {
    "empanada": 180,
    "milanesa": 1100,
    "ensalada": 550,
    "donas": 150
};

function pedirComida() {
    if (cantidadPersonas > 1) {
        do {
            plato = prompt("Que van a querer comer? (Ordenar uno a la vez por favor");
            comida.push(plato);
        } while (comida.length < cantidadPersonas && cantidadPersonas <= 4)
    } else if (cantidadPersonas == 1) {
        plato = prompt("Que vas a querer comer?");
        comida.push(plato);
    }
    alert("Perfecto! El pedido ya está siendo preparado");
    if (comida.length > 0) {
        for (const comidaItem of comida) {
            if (menu.hasOwnProperty(comidaItem)) {
                total += menu[comidaItem.toLowerCase()];
            }
        }
        if (cantidadPersonas > 1) {
            alert("Espero que hayan disfrutado la comida.\nAcá está el total: $" + total);
        }
        else if (cantidadPersonas == 1){
            alert("Espero que hayas disfrutado la comida.\nAcá está el total: $" + total);
        }
    }
}
pedirComida();