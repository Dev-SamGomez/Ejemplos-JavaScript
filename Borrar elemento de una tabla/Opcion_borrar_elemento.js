function confirmarEliminacion(e) {
    if (confirm("Estas seguro que deseas eliminar este contacto de la lista?")) {
        return true; //Si pulsa si, retorna true, ejecuando el script de php, el cual borra ese item seleccionado
    } else {
        e.preventDefault(); //Si usuario presiona no, dejara el evento como estaba
    }
}

let linkDelete = document.querySelectorAll(".tabla-items-link-det"); //Guardamos el id de la tabla seleccionada

for (var i = 0; i < linkDelete.length; i++) {
    linkDelete[i].addEventListener('click', confirmarEliminacion); //Recorremos para hacer match y en evento click, llamamos funcion confirmarEliminacion()
}