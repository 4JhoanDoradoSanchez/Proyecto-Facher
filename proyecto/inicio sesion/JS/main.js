//evento DOM
const boton = document.getElementById('boton');
const boton2 = document.getElementById('volver');

addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target)
    onloadpag(e.target);
})


function onloadpag(target) {
    if (boton == target) {
        document.location.href = "../star/index.html";
    }
    if (boton2 == target) {
        document.location.href = "../star/index.html";
    }

}