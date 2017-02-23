function mostrarDatos(){

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var direcc = document.getElementById("direcc").value;

    var inputAll = document.getElementsByClassName("impr");
 
	if (inputAll[0].value.length == 0 || inputAll[1].value.length == 0 || 
		inputAll[2].value.length == 0 || inputAll[3].value.length == 0){
	}else{
		document.getElementById("mostrar").innerHTML=
        "<ul>" +
          "<li><b>Nombre: </b>" + nombre + "</li>" +
          "<li><b>Apellido: </b>" + apellido + "</li>" +
          "<li><b>DNI: </b>" + dni + "</li>" +
          "<li><b>Dirección: </b>" + direcc + "</li>" +
        "</ul>";
	}
  
  document.getElementById("mostrar") = "";
}


    
