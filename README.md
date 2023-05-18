# Cifra de César

***

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

Resumo do projeto

Neste projeto foi criada a primeira aplicação web do _bootcamp_. Nela o usuário
pode cifrar e decifrar um texto no navegador indicando um deslocamento
específico de caracteres (_offset_). Foi feito isso usando HTML, CSS e
JavaScript.

O tema é:
* Mensagens secretas para alguma pessoa.

Foram retrabalhados os fundamentos
do JavaScript, incluindo conceitos como variáveis, condicionais e funções,
bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS.


 A mensagem usa um alfabeto simplificado.
  - Um número de deslocamento (_offset_) indicando quantas posições
    você deseja que a cifra desloque cada caractere do alfabeto. O número
    é positivo e inteiro (inteiro positivo).


* [ ] Possui uma interface que permite ao usuário criptografar e
  descriptografar.
* [ ] O projeto será entregue incluindo testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* [ ] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [ ] O código do projeto será entregue no GitHub.
* [ ] A interface será "implantada" usando o GitHub Pages.
* [ ] O README contém uma definição de produto.
