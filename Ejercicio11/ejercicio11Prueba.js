document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim());

    if (validarNombre(nombre) && validarCorreo(email) && validarEdad(edad)) {
        document.getElementById('final').textContent = 'Formulario Correcto';
    } else {
        document.getElementById('final').textContent = 'Formulario Incorrecto';
    }
});

function validarNombre(nombre){
    return nombre.length > 3;
}

function validarCorreo(correo){
    const expresionEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionEmail.test(correo);
}

function validarEdad(edad) {
    return edad > 0 && edad < 120;
}
