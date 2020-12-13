const volver = document.getElementById('volver');

const divE = document.getElementById('divE');
const imgE = document.getElementById('imgE');
const botonEmpleado = document.getElementById('btnE');
const divbtnE = document.getElementById('divbtnE');


const divbtnC = document.getElementById('divbtnC');
const divC = document.getElementById('divC');
const imgC = document.getElementById('imgC');
const botonCliente = document.getElementById('btnC');

addEventListener('click', (e) => {
    onloadpag(e.target);

});

function onloadpag(target) {
    if (volver == target) {
        document.location.href = "../star/index.html";
    }
    if (botonEmpleado == target || imgE == target || divE == target || divbtnE == target) {
        document.location.href = "../crear empleado/crearEmpleado.html";

    }
    if (botonCliente == target || imgC == target || divC == target || divbtnC == target) {
        document.location.href = "../crear cliente/crearCliente.html";

    }

}