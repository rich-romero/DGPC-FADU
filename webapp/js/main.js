
var blando = document.getElementById('tablaBlando');
var senmi = document.getElementById('tablaSemiridigio');
var duro = document.getElementById('tablaDuro');


blando.style.visibility = 'hidden';
senmi.style.visibility = 'hidden';
duro.style.visibility = 'hidden';



function calcular() {
    var blandoBox = document.getElementById("blandoBox");
    var semirigidoBox = document.getElementById("semirigidoBox");
     var duroBox = document.getElementById("duroBox");

    var blando = document.getElementById('tablaBlando');
	var senmi = document.getElementById('tablaSemiridigio');
	var duro = document.getElementById('tablaDuro');

    if (blandoBox.checked == true){
        blando.style.visibility = "visible";
    }
    
    if (semirigidoBox.checked == true){
        senmi.style.visibility = "visible";
    } 
    if (duroBox.checked == true){
        duro.style.visibility = "visible";
    }
    
//PLA VALUES
    
var placantsal = document.getElementById('cantidad').value;
var placalcantsal = document.getElementById('PLAcantidad').innerHTML = placantsal;
var plavalsal = document.getElementById('cantidad').value;
var placalvalsal = document.getElementById('PLAvalor').innerHTML = "$" + placantsal * 25;
        
//ABS VALUES
    
var abscantsal = document.getElementById('cantidad').value;
var abscalcantsal = document.getElementById('ABScantidad').innerHTML = abscantsal;
var absvalsal = document.getElementById('cantidad').value;
var abscalvalsal = document.getElementById('ABSvalor').innerHTML = "$" + placantsal * 25;
    
//FLEX VALUES
    
var flecantsal = document.getElementById('cantidad').value;
var flecalcantsal = document.getElementById('FLEcantidad').innerHTML = flecantsal;
var flevalsal = document.getElementById('cantidad').value;
var flecalvalsal = document.getElementById('FLEvalor').innerHTML = "$" + placantsal * 25;
    
}

function limpiar() {
    var blando = document.getElementById('tablaBlando');
	var senmi = document.getElementById('tablaSemiridigio');
	var duro = document.getElementById('tablaDuro');

	blando.style.visibility = 'hidden';
	senmi.style.visibility = 'hidden';
	duro.style.visibility = 'hidden';
}

/* crea un input del type file y le 
ponemos los valores necesarios
pone el eventListener (escuchador de eventos: cuando algo 
ocurre el input envia el evento change para indicar que cambio).
luego disparamos el evento click lo que obliga al input deltipo file 
a abrir un dialogo de opnefile.*/

function openDialog(){
input=document.createElement('input');
input.setAttribute('type', 'file');
input.setAttribute('name', 'myFile');
input.addEventListener("change", myFunction);
input.click();

}

/* funcion que ejecuta cuando el input cambia , evento change
(este evento se dispara cuando elegimos un file para el file open dialog)
en este caso, cambiamos el atributo scr que le indica que imagen cargar.
como el nombre del file viene con path usamos la funcion removepath 
para solo recuperar el nombre del file por eso le sumamos el directorio
*/

function myFunction(e) {

var i=document.getElementById('objeto3d');
var eo=document.getElementById('nomarch');
    i.src="img/"+removepath(input.value);
    /* aca concatenamos el img/ + el nombre del file */ 
    eo.innerHTML = removepath(input.value) ; // + ".3dx";
}

function removepath(c){
    var sep='\\';
    var i = c.lastIndexOf(sep) +1 ;
    return c.slice(i);
}
function getoutput() {
        outputfile.value = getFile(inputfile.value);
        extension.value = inputfile.value.split('.')[1];
    }

///// Pestañas - usuario

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


/////////VENTANA/////////////
    function openVentana(){
        $(".ventana").slideDown("slow");
    }
   function closeVentana(){
        $(".ventana").slideUp("fast");
    }



/* function formSubmit() {
  var fullpath = document.getElementById("zip_file_import").value;
  var backslash=fullpath.lastIndexOf("\\");
  var filename = fullpath.substr(backslash+1);

  var confirm_message = confirm("Files selected for import are \n Zip File: "+filename+"\n\nDo you want to proceed?");
   if (confirm_message==false) {
      return false;
   } else {
      document.getElementById("import_form").submit();
      document.body.style.cursor = "wait";
   }
} */

/*
function GetFileName(){
          // Get your file input (by it's id)
          var fileInput = document.getElementById('file');
          // Use a regular expression to pull the file name only
          var fileName = fileInput.value.split(/(\\|\/)/g).pop();
          // Alert the file name (example)
          alert(fileName); }*/

/* document.getElementById('objeto3d').onchange = function () {
  console.log(this.value);
 var document.getElementById('nomarch3d').innerHTML = document.getElementById('objeto3d').files[0].name; */

