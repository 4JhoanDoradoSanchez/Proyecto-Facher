//evento DOM
const boton = document.getElementById('boton iniciar');
const boton2 = document.getElementById('boton crear');

addEventListener('click', (e) => {
    onloadpag(e.target);
})


function onloadpag(target) {
    if (boton == target) {
        document.location.href = "../inicio sesion/index.html";
    }
    if (boton2 == target) {
        document.location.href = "../crear cuenta/index.html";
    }

}