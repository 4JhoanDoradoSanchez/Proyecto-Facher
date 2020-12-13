var formulario = document.getElementById('formulario');
const regresar = document.getElementById('regresar');
const registrar = document.getElementById('registrar');

addEventListener('click', function(e) {

    e.preventDefault();
    if (registrar == e.target) {
        create();
    }
    if (regresar == e.target) {
        document.location.href = "../crear cuenta/index.html";
    }
})