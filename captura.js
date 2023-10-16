/**El tema se explica en el video del 25 de Septiembre y 29 de Septiembre*/

var datos = [];
/**Create - Guardar*/
var agregar = function () {

    var cedula = document
        .getElementById("cedula")
        .value
    var nombre = document
        .getElementById("nombre")
        .value
    var apellidos = document
        .getElementById("apellidos")
        .value
    var direccion = document
        .getElementById("direccion")
        .value
        datos
        .push(
            {cedula: cedula, nombre: nombre, apellidos: apellidos, direccion: direccion}
        );
        localStorage.setItem("misdatos",datos);
    console.log(datos);
    listarinformacion();

}
/**Update - Editar*/
var modificar = function () {

    var cedula = document
        .getElementById("cedula")
        .value
    var nombre = document
        .getElementById("nombre")
        .value
    var apellidos = document
        .getElementById("apellidos")
        .value
    var direccion = document
        .getElementById("direccion")
        .value
        datos[idseleccionado].cedula = cedula
        datos[idseleccionado].nombre = nombre
        datos[idseleccionado].apellidos = apellidos
        datos[idseleccionado].direccion = direccion
    console.log(datos)
    listarinformacion()

}
/**Read - Leer*/
var listarinformacion = function () {

    /*var x = localStorage.getItem("misdatos")
    console.log( JSON.parse(x))
    datos = JSON.parse(x)*/

    var misdatos = document.getElementById("misdatos")
    misdatos.innerHTML = ""
    for (let a = 0; a < datos.length; a++) {

        misdatos.innerHTML += 
        `<tr>
        <td onclick="datoseleccionado(${a})">${datos[a].cedula}</td>
        <td onclick="datoseleccionado(${a})">${datos[a].nombre}</td>
        <td onclick="datoseleccionado(${a})">${datos[a].apellidos}</td>
        <td onclick="datoseleccionado(${a})">${datos[a].direccion}</td>
        <td><div class="btn btn-danger" onclick=eliminarcampo(${a})>Eliminar</div></td>
        </tr>`

    }

}

var idseleccionado = ""
var datoseleccionado = function(posicion){
     idseleccionado = posicion
     document.getElementById("cedula").value = datos[idseleccionado].cedula
     document.getElementById("nombre").value = datos[idseleccionado].nombre
     document.getElementById("apellidos").value = datos[idseleccionado].apellidos
     document.getElementById("direccion").value = datos[idseleccionado].direccion 
}

/**Delete - Borrar*/
var eliminarcampo = function (posicion) {
     console.log(posicion)
     datos.splice(posicion, 1)
     listarinformacion()
}

console.log(datos)

localStorage.setItem("misdatos", "boriscamargo78@gmail.com")


var buscarcedula = function () {
    var cedulaBuscada = document.getElementById("inputCedula").value;
    var encontrado = false;

    for (var i = 0; i < datos.length; i++) {
        if (datos[i].cedula === cedulaBuscada) {
            document.getElementById("cedula").value = datos[i].cedula;
            document.getElementById("nombre").value = datos[i].nombre;
            document.getElementById("apellidos").value = datos[i].apellidos;
            document.getElementById("direccion").value = datos[i].direccion;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Cédula no encontrada");
    }
};