


var btn= document.getElementById('tarjeta'); 
btn.addEventListener("click", function(){Formulario()}); 

function Formulario(){
	var cont=document.getElementById("conten-formulario"); 
	var btn= document.getElementById('tarjeta'); 
	//añadiendo clase que desaparece el elemento 
	btn.classList.add("noShow"); 
	// agregar clase que muestre el elemento formu 
	var formulario=document.getElementById("formu"); 
	formulario.classList.remove("noShow"); 
	formulario.classList.add("show"); 
	cont.classList.add("cont-dos"); 
};


function nuevaTarjeta(event){
	var formu=document.getElementById('formu'); 

	var parte2=document.getElementsByClassName('parteDos')[0]; 
	var nuevoformulario=document.createElement("dos"); 

	nuevoformulario.appendChild(formu); 
	parte2.appendChild(nuevoformulario); 
	nuevoformulario.classList.add("nuevoformulario");  
	var conten=document.getElementById("conten-formulario");
	conten.classList.add("noShow"); 
	var nuevoDiv=document.getElementById("cuadro"); 
	nuevoDiv.classList.remove("noShow")
	nuevoDiv.classList.add("show"); 
	var cardName= document.getElementById('input').value;
	document.getElementById('input').value="";
	var txtTitulo=document.createTextNode(cardName); 
	var titulo=document.createElement("h4"); 
	var tituloNuevo=document.getElementById("tituloNuevo"); 
	var Cuadro=document.getElementById("cuadro");
	var agrega=document.getElementById("agrega");
	titulo.appendChild(txtTitulo); 
	tituloNuevo.appendChild(titulo);
	nuevoCuadro.appendChild(tituloNuevo); 

	nuevoCuadro.insertBefore(tituloNuevo, agrega);
}
 

var btnGuardar=document.getElementById("btnGuardar"); 
btnGuardar.addEventListener("click", function(){nuevaTarjeta()});

function nuevoTextArea(){
	var newTextArea=document.createElement("textarea");
	newTextArea.classList.add("textAreaTarea"); 
	newTextArea.setAttribute("id","tareaPorHacer");
	var nuevoBtn=document.createElement("BUTTON");
	var txtButton=document.createTextNode("Añadir"); 
	nuevoBtn.classList.add("btnAñadir"); 
	nuevoBtn.setAttribute("id", "botonAnadir");
	nuevoBtn.setAttribute("onclick", "nuevaTarea()");
	var cont=document.getElementById("cuadro"); 
	var agrega=document.getElementById("agrega");
	cont.removeChild(agrega); 
	nuevoBtn.appendChild(txtButton); 
	cont.appendChild(newTextArea); 
	cont.appendChild(nuevoBtn); 

}; 
	var mensajeAgregar= document.getElementById("agrega"); 
	mensajeAgregar.addEventListener('click', function(){nuevoTextArea()});
function nuevaTarea(){
		var nuevaTarea=document.createElement("p"); 
		var txtNuevaTarea=document.getElementById("tareaPorHacer").value; 
		document.getElementById("tareaPorHacer").value="";
		var nodoTarea=document.createTextNode(txtNuevaTarea); 
		var padreTarea=document.getElementById("cuadro"); 
		var cajatextarea= document.getElementById("tareaPorHacer"); 
		nuevaTarea.classList.add("nuevaTarea");
		nuevaTarea.appendChild(nodoTarea); 
		padreTarea.appendChild(nuevaTarea);

		padreTarea.insertBefore(nuevaTarea,cajatextarea);

	};	