$(function() {
    // Initialize Firebase
	var config = {
		apiKey: "AIzaSyAilsG_OqZoW1HSQfdveTqcaMT5spF_2SI",
		authDomain: "series19-4b694.firebaseapp.com",
		databaseURL: "https://series19-4b694.firebaseio.com",
		projectId: "series19-4b694",
		storageBucket: "series19-4b694.appspot.com",
		messagingSenderId: "640364228662"
	};
	firebase.initializeApp(config);
	cambiarImagen("todo");
});

function cambiarImagen(categoria) {
	var tabla = $("#tab_accion");
	tabla.empty();
	var tr = document.createElement("tr");
	var contador = 0;
	var baseDatosSeries = firebase.database().ref("/series/");
	baseDatosSeries.on("value", snapshot => {
		console.log(snapshot.val());
		snapshot.forEach(snap => {
			contador += 1
			console.log(snap.val().categoria);
			console.log(categoria);
			if (categoria == "todo" || categoria == snap.val().categoria){
				var td = document.createElement("td");
				var a = document.createElement("a");
				var input = document.createElement("input");
				input.type = "image";
				input.src = snap.val().url;
				input.style.width = "200px";
				input.style.height = "320px";
				a.href = "series.html";
				input.classList.add("serie");
				a.append(input);
				td.append(a);
				tr.append(td);
				if (contador == 4){
					tabla.append(tr);
					tr = document.createElement("tr");
					contador = 0;
				}
			}
		})
		
	})
}

$(".pos").click(function(event){
    event.preventDefault();
});

function cargar(pag, tab) {
	$(tab).load(pag);
	
}

function tomarDatos(){
	var nombre;
	var Comentario;

	nombre = document.getElementById("txtNombre").value;
	Comentario = document.getElementById("txtComentario").value;
	document.getElementById("lblNombre").innerHTML = nombre;
	document.getElementById("lblComentario").innerHTML = Comentario
}

