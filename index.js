import cipher from './cipher.js';
//console.log(cipher);//


document.getElementById("codificar").addEventListener("click", codificar); //ouvinte de eventos + chamar a função//

function codificar() {
  const texto = document.getElementById("digite").value.toUpperCase(); // obtem o valor do campo de entrada e converte em letras maiúsculas//
  const desloc = parseInt(document.getElementById("desloc").value); // função parseInt que converte o primeiro argumento para string, analisa e retorna um nº inteiro ou NaN/
  const result = cipher.encode(desloc, texto);
  document.getElementById("msgDecod").innerHTML="Mensagem codificada";
  document.getElementById("result").value=result;
}

document.getElementById("decodificar").addEventListener("click", decodificar);

function decodificar() {
  const texto = document.getElementById("result").value; 
  const desloc = parseInt(document.getElementById("desloc").value);
  const result = cipher.decode(desloc, texto);
  document.getElementById("msgDecod").innerHTML="Mensagem decodificada";
  document.getElementById("result").value=result;
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