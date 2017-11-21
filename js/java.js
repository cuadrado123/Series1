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


function crear(){
    var database = firebase.database().ref('/series/');
    database.on("value" ,snapshot => {
        snapshot.forEach(snap =>{
            let series = document.getElementById("cont_series");
            let div, img, a;
            div = document.createElement("div");
            div.classList = "col-lg-3 col-md-4 col-xs-6";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "tamaño";
            a = document.createElement("a");
            console.log(snap.key)
            a.onclick = e => {cambiar(snap.key)};
            a.append(img);
            div.append(a);
            series.append(div);
        })
    })

}


function cambiar(llave){
    $("#cuerpito").load("./serie.html", function(res, stat){
        if(stat != "error"){

            var database = firebase.database().ref('/series/' + llave);
            database.on("value", snap =>{
                let imgContainer
                let titulo, descripcion, temporadas, produccion, video;
                titulo = document.getElementById("vid_titulo");
                titulo.innerHTML = snap.val().nombre;
                titulo.classList = "letra_titulo"
                imgContainer = document.getElementById("video");
                video = document.createElement("iframe");
                video.src = snap.val().video;
                imgContainer.append(video);
                video.classList = "video"
                descripcion = document.getElementById("descripcion");
                descripcion.innerHTML = snap.val().descripcion;
                descripcion.classList = "letra_descripcion"
                temporadas = document.getElementById("temporadas");
                temporadas.innerHTML = snap.val().temporadas;
                temporadas.classList = "letra"
                produccion = document.getElementById("produccion");
                produccion.innerHTML = snap.val().produccion;
                produccion.classList = "letra"





            });
     }
    })

}






function cargar(pag) {

    var database = firebase.database().ref('/series/');

    $('#tabSeccion').load("./seccion.html", function(res, stat){
        if(stat != "error"){

            database.on("value" ,snapshot => {
                snapshot.forEach(snap =>{

                    if (snap.val().categoria == pag){


                        let series = document.getElementById("containerxD");
                        let div, img, a;
                        div = document.createElement("div");
                        div.classList = "col-lg-3 col-md-4 col-xs-6";
                        img = document.createElement("img");
                        img.src = snap.val().url;
                        img.classList = "tamaño";
                        a = document.createElement("a");
                        console.log(snap.key)
                        a.onclick = e => {cambiar(snap.key)};
                        a.append(img);
                        div.append(a);
                        series.append(div);
                    }
                })
            })
        }
     });
    }

window.onload = function(argument) {
    crear();
}


function search(){
    var buscar
    var database = firebase.database().ref('/series/');

    buscar = document.getElementById("buscar_serie").value;

    $("#cuerpito").load("./search.html", function(res, stat){
        if(stat != "error"){

            database.on("value" ,snapshot => {
                snapshot.forEach(snap =>{

                    var serieName = snap.val().nombre;

                    if (serieName.toLowerCase().includes(buscar.toLowerCase())){


                        let series = document.getElementById("ubicacion");
                        let div, img, a;
                        div = document.createElement("div");
                        div.classList = "col-7 posicion";
                        img = document.createElement("img");
                        img.src = snap.val().url;
                        img.classList = "tamaño";
                        a = document.createElement("a");
                        console.log(snap.key)
                        a.onclick = e => {cambiar(snap.key)};
                        a.append(img);
                        div.append(a);
                        series.append(div);
                    }
                })
            })
        }
     })
}

