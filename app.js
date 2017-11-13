window.addEventListener("load", function(){
function add(){
	var contar =1;

	var cont = document.getElementById("cont");
	
	var btn = document.getElementById("btn");

	var inp = document.getElementById("tarjeta");

	var formulario = document.ElementById("cont-formulario")

    var inpu = document.getElementById("inpu");
 
    var  formu =document.getElementById("formu");

    formu.style.display="none";
    btn.addEventListener("click",agregarTarjeta);
    function agregarTarjeta(e) {
		e.preventDefault();
		btn.style.display="none";
		formu.style.display="inline-block";
		inp.value= "";
		inp.focus();

	}




	var guardar = documentElementById("btnguardar");
	guardar.addEventListener("click",nuevaTarea);
	function nuevaTarea(e){  
		e.preventDefault();
		formu.style.display="none";//Cancela el evento si este es cancelable
		var inp = document.getElementById("tarjeta").value;
		var inpu = document.createElement("div");
		inpu.classList.add("azul");
		var texto  = document.createElement("div"); 
		texto.innerHTML = inp;
		texto.classList.add("texto");
		cont.insertBefore(inpu,cont.lastElementChild);
		inpu.appendChild("texto");
		var agregarNew =document.createElement("div");
		agregarNew.innerHTML = ("agrega un nueva tarea");
		agregarNew.classList.add("agregarNewTexto");
		inpu.appendChild("agregarNewTexto");
		var array =document.querySelectorAll(".agregarNewTexto");
		btn.style.display="inline-block";
		var newtext = creartext("agregarNewTexto");
		array[array.length-1].addEventListener("click",function() {
			this.style.display="none";
 			this.nextElementSibling.style.display=null;
 			this.nextElementSibling.firstElementChild.focus();

 			

		});

		inpu.addEventListener("drop",ondropLista);
		inpu.addEventListener("dragover",ondragoverLista);
		inpu.addEventListener("dragleave",ondragleaveLista);



	}

	function newFormulario (inpu,a){
	var formu = document.createElement("formu");
	inpu.appendChild(formu);
	var textArea = documentCreateElement("textarea");
	textArea.classList.add(textArea);
	form.appendChild(textArea);
	var guardar = document.CreateElement("button");
	buttonGuardarTareaClassList.add("btnAnadir");
	buttonGuardarTarea.innerHTML = "guardar";
	form.appendChild("botonGuardarTarea");
	form.lastElementChild.addEventListener('click' function (e){
		e.preventDefault();
		form.previousElementSibiling.style.display=null;
		var tex = document.createElement("div");
		tex.classList.add("Nueva");
		tex.setAttribute("dragabble","true");
		tex.id= "inp"+contar;
		tex.innerHTML = textArea.value;
		tareas.insertBefore(tex,a);
		textArea.value="";
		formu.style.display="none";
		contar++;

		tex.addEventListener("dragstart",ondragstart);
		tex.addEventListener("dragend",ondragend);
		tex.addEventListener("dragover",ondragover);
		tex.addEventListener("drop",ondrop);
		function ondragstart(e){
			this.classList.add("gray");
			e.dataTransfer.setData("conten", e.target.id);
		}
		function ondragover(e){
			e.preventDefault();
			
		}
		function ondrop(e){
			this.parentElement.classList.remove("green")
			var id = e.dataTransfer.getData("conten");
			this.parentElement.insertBefore(document.getElementById(id), this.nextElementSibling);
			e.stopPropagation();
		}

		function ondragend(e){
			this.classList.remove("gray");
			this.classList.add("animated","swing");

		}

	});

}
		function ondropLista(e){
			var id = e.dataTransfer.getData("conten");
			this.insertBefore(document.getElementById(id), this.firstElementChild.nextElementSibling);
			this.classList.remove("green");
		}
		function ondragoverLista(e){
			e.preventDefault();
			this.classList.add("green");

		}
		function ondragleaveLista(e){
			this.classList.remove("green");
		}
};

	// falta guardar en otro div la caja nueva