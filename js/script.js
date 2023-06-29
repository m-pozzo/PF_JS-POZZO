alert("Bienvenido! \n Esto es una calculadora para calcular:\n-Velocidad a la que vas (m/s) \n-Distancia (metros) que recorriste en base al tiempo y a la velocidad que vas\n-Tiempo (segundos) dependiendo a que velocidad recorriste cierta distancia");

alert("Bienvenido. Esto es un simulador de un restaurante...");
alert("")

let eleccion = "";
let opcionValida = false;


while (!opcionValida) {
    let eleccion = prompt("-'V' para calcular velocidad\n-'D' para calcular distancia\n-'T' para calcular tiempo\n-'S' o 'salir' para terminar de usar la calculadora");

    if (eleccion === "V" || eleccion === "v" || eleccion === "velocidad" || eleccion === "Velocidad") {
        calcularVelocidad();
        opcionValida = false;
    } else if (eleccion === "D" || eleccion === "d" || eleccion === "distancia" || eleccion === "Distancia") {
        calcularDistancia();
        opcionValida = false;
    } else if (eleccion === "T" || eleccion === "t" || eleccion === "tiempo" || eleccion === "Tiempo") {
        calcularTiempo();
        opcionValida = false;
    } else if (eleccion === "S" || eleccion === "s" || eleccion === "salir") {
        alert("Espero que te haya gustado crack\nNos vemos en la proxima pre-entrega!!!")
        opcionValida = true;
    } else {
        alert("No me ingreses cualquier cosa, no doy para tanto:v (por ahora)\nVamos a intentar de nuevo👍")
    }
}

function calcularVelocidad() {
    alert("Queres calcular tu velocidad? Perfecto, vamos a calcularlo");
    let distancia = parseInt(prompt("Primero, necesito que me digas cuanta distancia recorriste"));
    let tiempo = parseInt(prompt("Y por ultimo, necesito que me digas en cuanto tiempo recorriste esa distancia"));
    let calculoVelocidad = distancia / tiempo;
    alert(`Tu velocidad es de ${calculoVelocidad} m/s`);
}

function calcularDistancia() {
    alert("Queres calcular la distancia que recorriste? Perfecto, vamos a calcularlo");
    let velocidad = parseInt(prompt("Primero, necesito que me digas a que velocidad ibas"));
    let tiempo = parseInt(prompt("Y por ultimo, necesito que me digas por cuanto tiempo fuiste a esa velocidad"));
    let calculoDistancia = velocidad * tiempo;
    alert(`El distancia que recorriste es de ${calculoDistancia} m`);
}

function calcularTiempo() {
    alert("Queres calcular el tiempo que tardaste? Perfecto, vamos a calcularlo");
    let distancia = parseInt(prompt("Primero, necesito que me digas cuanta distancia recorriste"));
    let velocidad = parseInt(prompt("Y por ultimo, necesito que me digas a que velocidad ibas"));
    let calculoTiempo = distancia / velocidad;
    alert(`El tiempo que tardaste es de ${calculoTiempo} s`);
}