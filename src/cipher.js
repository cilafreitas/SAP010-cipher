//encode and decode ASCII function


const cipher = {
  encode:function(desloc, texto){
    if(typeof desloc !== 'number' || typeof texto !== 'string') //condição para ver se meu texto é um número e se meu texto é uma string
    {throw new TypeError('os argumentos devem ser number e string')}
    else{
      let textoCodificado ="";  //variável que irá receber o texto codificado
      for(let i = 0; i< texto.length; i++){ // Estrutura de repetição Laço For
        let caracter = texto[i];
        if(caracter.match(/[a-z]/i)){
          const codigoAsc = texto.charCodeAt(i);
          if(codigoAsc >=65 && codigoAsc <=90){
            caracter = String.fromCharCode(((codigoAsc - 65 + desloc)% 26)+65); //Esta é a equação para codficar e decodificar//

          }
        }
        textoCodificado += caracter;
      }
      return textoCodificado
    }
  },
  
  decode:function(desloc, texto){
    if(typeof desloc !== 'number' || typeof texto !== 'string') //condição para ver se meu texto é um número e se meu texto é uma string
    {throw new TypeError('os argumentos devem ser number e string')}
    else{
      let textoCodificado ="";  //variável que irá receber o texto codificado
      for(let i = 0; i< texto.length; i++){ // Estrutura de repetição Laço For
        let caracter = texto[i];
        if(caracter.match(/[a-z]/i)){
          const codigoAsc = texto.charCodeAt(i);
          if(codigoAsc >=65 && codigoAsc <=90){
            let result= codigoAsc- 65 - desloc;
            while(result < 0){
              result+= 26;
            }
            caracter = String.fromCharCode((result % 26)+65);

          }
        }
        textoCodificado += caracter;
      }
      return textoCodificado
    }
  }
};

export default cipher;
