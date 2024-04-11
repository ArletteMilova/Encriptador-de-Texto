const encryptText = document.querySelector(".texto");
const copyText = document.querySelector(".resolucion");
var regex = /^[a-z \n]+$/;

let mensaje


document.addEventListener("keyup", () => {
  let de = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´",
    a = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc",
    re = new RegExp("[" + de + "]", "ug");

  encryptText.value = encryptText.value.replace(re, (match) =>
    a.charAt(de.indexOf(match))
  );

  encryptText.value = encryptText.value.toLowerCase();
});



function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById ("doll");

  
   if (!regex.test(encryptText.value)){
        return alert ("El texto no debe conterner mayúsculas ni caracteres especiales. Tampoco puede estar vacío, intentalo de nuevo por favor.");
    }
    
   
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/o/gi, "ober")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/u/gi, "ufat");

    if (encryptText.value!= 0) { 
        document.getElementById("resolucion").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = ".img/encriptado3.jpg";
    }
  

    encryptText.value ="";
    
    document.getElementById("resolucion").innerHTML = textoCifrado;
    
}

function desencriptar(){
    const texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById ("doll");
    
    
    let textoCifrado = texto
   .replaceAll(/ai/gi,"a")
   .replaceAll(/imes/gi,"i")
   .replaceAll(/enter/gi,"e")
   .replaceAll(/ober/gi,"o")
   .replaceAll(/ufat/gi,"u");
   
    encryptText.value ="";
  
 document.getElementById("resolucion").innerHTML=textoCifrado

   if (texto.length != 0){
    document.getElementById("resolucion").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = ".img/festejando.jpg";
    }
}

function recuperarTextoBloque2() {
    var text = document.querySelector(".resolucion");
    return text.textContent;
}

function copiar() {
    var textoCopiar = recuperarTextoBloque2();
    navigator.clipboard.writeText(textoCopiar);
    return alert ("Se copió correctamente");
    copyText.value ="";
}

function reiniciar(){
  location.reload();
}



