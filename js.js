var contadorClick=0;
function crearFlies() {
    event.preventDefault();

    var lugarCaracteres = document.getElementById("contadorCaracteres");
    var lugar = document.getElementById("mostrarFlies");
    var articulo = document.createElement("article");
    var h3 = document.createElement("h3");
    var parrafo = document.createElement("p");
    var autor = document.getElementById("autor");
    var twoit = document.getElementById("flies");

    lugar.appendChild(articulo);    
    articulo.appendChild(parrafo);
    articulo.appendChild(h3);

    parrafo.innerText=twoit.value;
    h3.innerText="De: "+autor.value;       
    
    twoit.value="";
    autor.value="";
    contador=0;
    lugarCaracteres.innerText=contador;
    lugarCaracteres.style.color="#000000";
    

}
function contadorCaracteres() {
    event.preventDefault();
    var textarea = document.getElementById("flies");
    var lugar = document.getElementById("contadorCaracteres");
    var cercaAlMaximo=100;
    var maximo=140;
    lugar.innerText=textarea.textLength;

        if (textarea.textLength>=cercaAlMaximo){
        lugar.style.color="#DC143C";       
    } if (textarea.textLength<cercaAlMaximo){
        lugar.style.color="#000000"
    }
}


document.addEventListener("click",contador);


function contador() {
    var lugar = document.getElementById("contadorClicks");
    lugar.innerText = " "+contadorClick;    
    contadorClick++
    
    }
    

