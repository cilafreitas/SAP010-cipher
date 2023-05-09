import cipher from './cipher.js';
//console.log(cipher);//


document.getElementById("codificar").addEventListener("click", codificar);
function codificar(){
  const texto = document.getElementById("outputEncode").value; 
  const desloc = parseInt(document.getElementById("desloc").value);
  const mensagemCod = cipher.encode(desloc, texto);
  document.getElementById("outputEncode").value= mensagemCod;
}

document.getElementById("decodificar").addEventListener("click", decodificar);
function decodificar(){
  const texto = document.getElementById("outputDecode").value; 
  const desloc = parseInt(document.getElementById("desloc").value);
  const descript = cipher.decode(desloc, texto);
  document.getElementById("outputDecode").value=descript;
}



//manipulação de DOM

// clicar botão
// pegar o valor do input
// fazer a validação e/ou criptografia - validort.js/cipher
// retorno o valor para o usuario

//seletores de DOM

/*console.log(cipher);

const button = document.getElementById("button")
const title = document.getElementById("title")
button.addEventListener("click", teste)

const textearea = document.getElementById("input-texto")

function teste() {
    console.log(textearea.value)
}*/