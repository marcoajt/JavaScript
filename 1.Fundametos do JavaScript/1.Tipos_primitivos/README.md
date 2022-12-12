# Preparando o ambiente

JavaScript é conhecida como a “linguagem da web”. Embora tenha se  desenvolvido no front-end, atualmente cada vez mais utilizamos  JavaScript no chamado back-end, ou server side (lado do servidor) das  aplicações web. Este curso foca no uso do JavaScript para back-end.

Assim, precisaremos instalar duas ferramentas: o **NodeJS**, necessário para executar código JavaScript sem precisar do navegador, e o **Visual Studio Code** ou VSC, editor que usamos para escrever código.

## NodeJS

Caso já tenha feito algum curso anterior de JavaScript para back-end, o NodeJS pode já estar instalado. Se não tiver certeza, é possível  conferir com os seguintes passos:

\1)  Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

- **Windows**: Você pode acessar a busca no menu  inicial e procurar por Prompt de Comando, ou acessar via Menu Iniciar  > Sistema do Windows > Prompt de Comando.

- **MacOs**: O Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.

- **Linux (Ubuntu)**: O Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

\2) No terminal, digite `node --version` ou `node -v` - caso retorne um número de versão, como por exemplo, `v14.16.0`, o NodeJS já está instalado. 

Caso precise instalar, siga as instruções para cada sistema operacional que estão na [página inicial do NodeJS](https://nodejs.org/pt-br/). Este curso foi desenvolvido usando a versão 14.10.1.

O site do NodeJS oferece duas opções para download, a LTS e a  "current" (atual). Você pode escolher a versão LTS (Long Term Support,  ou Suporte a Longo Prazo) e clicar no botão correspondente para baixar e instalar normalmente como qualquer outro programa.

![print da tela do navegador acessando nodejs.org/en. A tela mostra o lodo do NodeJS e a barra de navegação abaixo do logo mostra que está na página inicial. Abaixo disso, as informações "NodeJS é um runtime para JavaScript desenvolvido em cima da engine V8 do Chrome para JavaScript" e "Download para Linux (x64)". Em seguida, dois botões para download: o primeiro diz "14.17.6 LTS Recomendado para a maioria dos usuários" e o segundo diz "16.9.1 Atual - Funcionalidades mais recentes".](https://cdn1.gnarususercontent.com.br/1/115138/a5aa34ca-c2fa-4679-885e-2ce3cdc5f8d6.png)

## Visual Studio Code

O Visual Studio Code é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de  acordo com o seu sistema operacional estão na [página inicial](https://code.visualstudio.com/) do VSC. 

Existem vários outros editores, como o Atom, o Sublime e o Notepad++. Caso já tenha algum destes instalado ou preferência por outro, fique à  vontade! Note apenas que alguns recursos e ferramentas variam de editor  para editor, e podem não estar disponíveis ou funcionar de forma  diferente.

Agora podemos começar!

# O Visual Studio Code

Para este curso, vamos utilizar o editor de código [Visual Studio Code](https://code.visualstudio.com/), da Microsoft. É um dos editores mais utilizados e conta com várias  ferramentas para facilitar o dia a dia do desenvolvimento, além do **terminal integrado** que vamos usar para executar nossos códigos durante o curso.

Caso você não tenha familiaridade com o VSC e suas ferramentas, preparamos estes materiais para começarmos:

- [VSCode: dicas e truques](https://www.youtube.com/watch?v=C3o9KwOHeCk&ab_channel=AluraCursosOnline) (vídeo) que explica passo a passo várias ferramentas que o VSC usa para nos ajudar a escrever código melhor;
- [Como utilizar o terminal integrado do VSC](https://www.alura.com.br/artigos/como-utilizar-terminal-integrado-visual-studio-code) (artigo), focado especialmente no uso do terminal;
- [Trabalhando com caminhos e pastas no terminal](https://www.alura.com.br/artigos/trabalhando-com-caminhos-e-pastas-no-terminal) (artigo) para entender melhor como funciona a hierarquia de pastas e como acessar nossos arquivos via terminal.

Bons estudos!

​				                       

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

# Para saber mais: Codificação de strings

Acabamos de ver que usamos o tipo `string` sempre que  queremos trabalhar com dados de texto. Mas se pararmos para pensar,  vários idiomas utilizam caracteres diferentes, como acentos e  ideogramas. Como as linguagens de programação lidam com isso? E o que  dizer dos *emojis* :question:? Você já visitou algum site e notou que os caracteres dos textos não pareciam corretos, que no lugar de  alguns deles aparecia um sinal de interrogação, quadrados ou traços?

Isso tudo tem a ver com a **codificação de caracteres**, ou *character encoding*. Nas últimas décadas, foram desenvolvidos diversos conjuntos de  caracteres especiais, cada um com seus próprios códigos, para que  pessoas que escrevem e leem em linguagens diferentes do inglês pudessem  utilizar computadores com seus próprios idiomas. E como isso funciona?

Para que o computador consiga **decifrar** um caractere  especial, é preciso utilizar um sistema específico que tenha basicamente um código para cada caractere, e que o computador possa acessá-lo para  fazer a conversão - uma ideia similar a que está por trás da  criptografia. 

Foram desenvolvidos diversos conjuntos de caracteres, desde os  específicos de cada linguagem como Western, Latin-US, Japanese e assim  por diante, até o ASCII (*American Standard Code for Information Interchange* ou ”Código Padrão Americano para o Intercâmbio de Informação”). e a  partir de 2007 foi adotado o formato Unicode. O padrão UTF (de *Unicode Transformation Format* ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje. 

O Unicode tem códigos específicos para “cifrar” e “decifrar”  caracteres de mais de 150 idiomas antigos e modernos, e também diversos  outros conjuntos de caracteres como símbolos matemáticos e inclusive *emojs*. A [Wikipedia](https://en.wikipedia.org/wiki/List_of_Unicode_characters) tem uma lista extensa de todas as tabelas com os códigos Unicode e os caracteres, como por exemplo os que estão abaixo:

| caractere | UTF-16 | descrição oficial       |
| --------- | ------ | ----------------------- |
| $         | U+0024 | DOLLAR SIGN             |
| A         | U+0041 | LATIN CAPITAL LETTER A  |
| ✅         | U+2705 | CHECK MARK              |
| ぁ        | U+3041 | HIRAGANA LETTER SMALL A |

Podemos testar a transformação/conversão do código Unicode em caractere utilizando o `console.log()`. Faça o teste:

```cpp
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
```

Os caracteres `\u` no início do código são **caracteres de escape** que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais. 

O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado  aos espaços em bits ocupados por cada caractere, 16 neste caso. Não  vamos nos aprofundar na relação entre tipos de dados e espaço de memória ocupado por cada tipo - você pode pesquisar mais sobre o assunto, assim como sobre o que são caracteres de escape! - mas por enquanto é bacana  vermos na prática como o Unicode funciona. 

Bancos de dados podem aceitar outros tipos de codificação de  caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma  quantidade relativamente grande de espaço em memória para salvar cada  caractere. 16 bits parece pouco, mas algumas vezes os bancos precisam  salvar quantidades enormes de dados! Porém, com as tecnologias de  armazenamento e tráfego de dados que temos hoje, esta já não é uma  preocupação tão grande, a não ser em casos muito específicos. Já não é  muito comum utilizar uma codificação diferente da UTF em bancos mesmo em caso de grandes volumes de dados, mas sempre vai depender **muito** do caso.

Mais detalhes precisos e documentação sobre o Unicode na página da [Unicode Foundation](https://home.unicode.org/).

​				                       

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

# Para saber mais: Mais sobre números

Programas funcionam manipulando valores, como o número `3.14` ou o texto `Juliana e Leonardo`. Os tipos de valores que podem ser representados e manipulados em uma  linguagem de programação são conhecidos como tipos, e uma das  características mais fundamentais de uma linguagem de programação é o  conjunto de tipos que ela suporta. 

## Variáveis

Quando um programa precisa reter um valor para uso futuro, ele  atribui o valor a (ou “armazena” o dado em) uma variável. As variáveis  têm **nomes** e permitem o uso desses nomes em nossos  programas para se referir a valores. A maneira como as variáveis  funcionam é outra característica fundamental de qualquer linguagem de  programação. 

Os tipos de JavaScript podem ser divididos em duas categorias: tipos **primitivos** e tipos de **objetos**. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como **strings**) e valores booleanos (conhecidos como **booleanos**).

## Tipos numéricos

Como vimos em aula, podemos armazenar números de diferentes formas:

```cpp
const idade = 28
const pi = 3.14
```

> Dica: podemos utilizar o número [PI](https://pt.wikipedia.org/wiki/Pi) através com o código `Math.PI`.

O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe  tradicional para números reais. Um valor real é representado como a  parte integral do número, seguido por um ponto decimal e a parte  fracionária do número.

Pontos flutuantes também podem ser representados usando notação  exponencial: um número real seguido pela letra e (ou E), seguido por um  sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do  expoente.

> Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “*Infinity*”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico  NaN.

```javascript
var a = 10
var b = 0
console.log(a/b) // Infinity
var a = 0
var b = 0
console.log(a/b) // NaN
```

## Links

- [Como formatar número com JavaScript](https://www.alura.com.br/artigos/formatando-numeros-no-javascript)
- [Como ordenar uma sequência de números no JavaScript](https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona)

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