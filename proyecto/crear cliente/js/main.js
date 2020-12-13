var formulario = document.getElementById('formulario');
const volver = document.getElementById('volver');
const registrar = document.getElementById('boton');

addEventListener('click', function(e) {
    e.preventDefault();
    if (registrar == e.target) {
        create();
    }
    if (volver == e.target) {
        document.location.href = "../crear cuenta/index.html";
    }
})


function create() {
    lista = document.getElementById('lista');

    var datos = new FormData(formulario);

    fetch("php/validacion.php", {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(d => {
            console.log(d)
        }).catch(error => console.log(error))
}