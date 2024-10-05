
// CONSTANTES
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const multiplicacion = document.querySelector('#multiplicacion');

// CREAR EVENTOS
suma.addEventListener('click', sumar);
resta.addEventListener('click', restar);
division.addEventListener('click', dividir);
multiplicacion.addEventListener('click', multiplicar);


// FUNCIONES
function sumar(){  
    const num1 = document.querySelector('#numero1').value;
    const num2 = document.querySelector('#numero2').value;

    const resultado = document.getElementById('resultado');
    resultado.textContent = parseFloat(num1) + parseFloat(num2);
}

function restar(){  
    const num1 = document.querySelector('#numero1').value;
    const num2 = document.querySelector('#numero2').value;

    const resultado = document.getElementById('resultado');
    resultado.textContent = parseFloat(num1) - parseFloat(num2);
}

function dividir(){  
    const num1 = document.querySelector('#numero1').value;
    const num2 = document.querySelector('#numero2').value;

    const resultado = document.getElementById('resultado');
    resultado.textContent = parseFloat(num1) / parseFloat(num2);
}

function multiplicar(){  
    const num1 = document.querySelector('#numero1').value;
    const num2 = document.querySelector('#numero2').value;

    const resultado = document.getElementById('resultado');
    resultado.textContent = parseFloat(num1) * parseFloat(num2);
}
