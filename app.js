function add(){
	var contar = 1;

	var cont = document.getElementById("cont");
	
	var btn = document.getElementById("btn");

	var inp = document.getElementById("tarjet");

    var inpu = document.getElementById("inpu");
 
    var  formu =document.getElementById("formu");

    formu.style.display="none";
    btn.addEventListener("click",agregarlista);
    function agregarlista(e) {
		e.preventDefault();
		btn.style.display="none";
		formu.style.display="inline-block";
		inp.value= "";
		inp.focus();

	}

	// falta guardar en otro div la caja nueva.