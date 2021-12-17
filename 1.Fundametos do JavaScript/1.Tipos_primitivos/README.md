### **Para saber mais: Trabalhando com strings**

O JavaScript traz em sua biblioteca-base vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.

Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

```
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // falseCOPIAR CÓDIGO
```

Nós, como pessoas, conseguimos perceber o valor das variáveis `cidade` e `input` como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, **o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos**.

Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

```
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // trueCOPIAR CÓDIGO
```

Acima, vemos um dos **métodos de string nativos do JavaScript** em ação, o `toLowerCase()` que converte todos os caracteres da string informada (no caso, `input`) para letras minúsculas (se forem algarismos, nada é convertido). Você pode conferir mais sobre este método no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade `length` pode ser utilizada para sabermos quantos caracteres uma string contém:

```
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteresCOPIAR CÓDIGO
```

A propriedade `length` é muito usada no dia a dia do desenvolvimento web. Você pode descobrir mais sobre ela [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length).

> Percebeu que `length` não leva parênteses no final da palavra? Há uma diferença entre **métodos** e **propriedades** que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)

Você pode conferir a lista completa de [métodos de string do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#métodos) (são vários), com a descrição de cada um, e praticar com os exemplos.

## Git

1 - ``git init``

2 - ``git remote add origin caminho``

3 -`` git add .``

4 - ``git commit -m "comentario"``

5 - ``git push origin master``



### **Para saber mais: Padrão de nomes no JavaScript**

Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que **cada linguagem possui seus próprios padrões**. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

A primeira coisa que precisamos ter em mente é que **o JavaScript é \*case-sensitive\*, ou seja, diferencia maiúsculas e minúsculas**. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como `console.log`) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

```
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)COPIAR CÓDIGO
```

Podemos ver que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

- `camelCase`: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: `minhaVar` ou `senhaDoUsuario`. **Esta é a convenção utilizada pelo JavaScript para variáveis e funções.**

- `snake_case`: Os espaços são substituídos pelo caractere `_` (underline), com todas as palavras em letra minúscula. Por exemplo: `minha_variavel` ou `senha_do_usuario`.

- `kebab-case`: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: `minha-var` ou `senha-do-usuario`.

- `PascalCase`: Similar ao `CamelCase`, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: `MinhaVar` ou `SenhaDoCliente`.

> Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript, seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados **guias de estilo** definidos para um produto de código sejam seguidos.

### **Para saber mais: Tipos null e undefined**

Nesta aula falamos sobre três tipos primitivos: `number`, `string` e `boolean`. Mas existem ainda mais dois tipos que não abordamos com profundidade: `null` e `undefined`.

O `null` é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

```
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}COPIAR CÓDIGO
```

Nesse caso, qual seria a diferença entre os dois casos abaixo?

```
let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefinedCOPIAR CÓDIGO
```

É aqui que entra o tipo `undefined`. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto `null` é um valor atribuído a uma variável que existe e foi iniciada, `undefined` se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

> `undefined` também é o valor retornado por uma função que não tem cláusula `return`. Veremos mais sobre funções e `return` mais adiante no curso.

É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:

```
console.log(null == undefined); // true
console.log(null === undefined); // falseCOPIAR CÓDIGO
```

No cotidiano é comum considerar `undefined` como uma ausência de valor “inesperada” (causada por um *bug* ou erro no código) e `null` como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor `null`.



## Diferença entre “==” e “===”

É possível perceber na tabela acima, que existe tanto o símbolo de “igual a” (==), quanto o de “idêntico a” (===). Mas qual eu devo utilizar para cada situação? Se usarmos o operador “==” em uma condição, saberemos que ela só será verdadeira se **o valor da esquerda for o mesmo valor da direita**, por exemplo:

```
javascript
if (true == “true”) //retorna true
if (10 == “10”) //retorna true
if (true == true) //retorna true
if (10 == 10) //retorna true
```

Mas suponha que seja preciso fazer essa validação tendo certeza de que o número da direita é realmente um número, e não apenas possui o mesmo caractere. O que fazemos?

É nessa hora que entra o símbolo de “idêntico a” (===). Ele não só **compara os valores** dos dois lados da equação, como também verifica **se eles são do mesmo tipo**. Por exemplo:

```
javascript
if (true === “true”) //retorna false
if (10 === “10”) //retorna false
if (true === true) //retorna true
if (10 === 10) //retorna true
```

E assim como os operadores “==” e “===”, usamos a mesma lógica para os seus inversos “!=” e “!==”. Veja a seguir:

```
if (true != “true”) //retorna false
if (4 != “4”) //retorna false
if (true !== “true”) //retorna true
if (4 !== “4”) //retorna true
if (true !== true) //retorna false
if (4 !== 4) //retorna false
```