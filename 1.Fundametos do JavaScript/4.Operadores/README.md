# Projeto da aula anterior

Você pode [baixar o zip](https://github.com/alura-cursos/2206-fundamentos-js/archive/refs/heads/master.zip) ou acessar o link do repositório no [GitHub](https://github.com/alura-cursos/2206-fundamentos-js)!

# Operadores de comparação

[00:00] Ju: Nesse vídeo, nós vamos  ver mais uma característica que é do JavaScript e é diferente da maior  parte das linguagens que trabalhamos comercialmente, que é os dois  iguais, os três iguais, que já pincelamos nos vídeos anteriores, que são operadores de comparação.

[00:17] Ju: Léo, fala um pouco para nós do que é essa questão de dois iguais, três iguais, que, às vezes, causa confusão para quem está  começando e como trabalhamos com esses dois casos.

[00:29] Leonardo: Ju, o JavaScript tem essa diferença entre o dois  iguais e o três iguais. O dois iguais faz a comparação e faz aquela  conversão implícita, que já demos uma olhada antes, antes de fazer essa  comparação. O três iguais é mais específico, ele sempre compara os  valores sem fazer essa comparação antes.

[00:50] Leonardo: Então, um número e uma *string* não são iguais quando usamos o três iguais. Vamos testar agora?

[00:59] Ju: Vamos. Eu vou compartilhar a minha tela, vou fazer o que  temos feito anteriormente, que é criar mais um arquivo que eu vou chamar de “comparacoes.js” e vamos lá.

[01:16] Ju: Nós temos a questão do igual igual. Nós chamamos de dois  iguais, mas, é igual igual, que é a comparação implícita. Vamos lá, Léo, vamos fazer alguns exemplos?

[01:30] Leonardo: Vamos, Ju. Vamos começar declarando algumas variáveis, uma de tipo número e uma de tipo *string*.

[01:40] Ju: Então, crio uma `const numero`, pode colocar qualquer número?

[01:47] Leonardo: Qualquer número.

[01:48] Ju: Vou colocar 5 e uma `const texto` que eu vou colocar entre aspas Alura ou tem que ser a mesma coisa? Ou pode ser um texto qualquer?

[01:57] Leonardo: Pode ser um número. Coloca o mesmo número, por enquanto.

[01:59] Ju: O mesmo número. Então, `”5”`, entre aspas para virar uma *string*. 

[02:08] Leonardo: Ok. Vamos fazer, agora, o nosso console.log com a  nossa comparação dentro dele e usar os dois iguais, o que já fazíamos  antes.

[02:16] Ju: Ok. Então, `console.log(numero ==     texto)`. O que esperamos é, lembrando que o resultado de uma comparação é ou não é, ela é verdadeira ou falsa, ela é *true* ou *false*, então, para rodar nós entramos na pasta (como temos feito com os vídeos anteriores) `cd 2206`, que é o nome da minha pasta, e vou rodar o comando com o `node` e o nome do arquivo, que é comparacoes.js. 

[02:45] Ju: O resultado é *true*. 

[02:49] Leonardo: *True*. Então, como já vimos antes, o  JavaScript fez a conversão do nosso texto para um número e fez a  comparação entre o número 5 e, agora, o texto que virou número “5”.  Então, 5 é igual á “5”, então, é *true*.

[03:03] Leonardo: Vamos fazer agora a comparação explícita, usando os três iguais.

[3:09] Ju: Ok. Eu vou usar o mesmo `console.log` e agora vou colocar `(numero === texto)`. Vou limpar o terminal e rodar o mesmo comando, e agora ele não aceita, deu *false*. 

[03:22] Leonardo: Deu *false*. Por que? Porque ele não faz  essa conversão automaticamente para nós. Nesse caso, nós ficamos para  fazer essa conversão de forma manual.

[03:35] Leonardo: Um outro jeito que podemos fazer isso, que podemos  ver esses três iguais, é quando ele está comparando os valores das  nossas variáveis e os tipos das nossas variáveis. Então, Ju, vamos dar  uma olhada nos tipos delas, também, com o *type of*?

[03:51] Ju: Certo. Nós usamos uma palavra-chave, que chama, inclusive, `typeof`, tudo junto, tudo minúsculo, que é muito útil para descobrirmos qual o  tipo de dado que está sendo salvo na variável. Vamos tentar colocar `console.log` e pedir para ele nos dizer qual que é o *type of* de cada uma?

[04:20] Leonardo: Isso.

[04:21] Ju: Eu vou escrever dois consoles. Um `console.log(typeof numero)` e um `console.log(typeof texto)`. Nós limpamos o console e rodamos, novamente.

[04:36] Ju: Agora, ele nos dá duas informações: um *number* e uma *string*. O que são, o que ele está dando para nós, exatamente? Qual é o tipo de dado?

[04:45] Leonardo: Ele está nos dando qual o tipo de dado essa variável está armazenando.

[04:49] Leonardo: Como o três igual está comparando o valor das  nossas variáveis, então, 5 é igual à “5”, mas, número não é igual à *string*, então, ele dá como falso.

[05:02] Ju: Ok. Então, podemos concluir que dois iguais compara só o  valor e três iguais compara o valor e o tipo de dado, não é?

[05:11] Leonardo: Exatamente.

[05:12] Ju: E se não bater tudo, ele não vai dar *true*. Perfeito.

[05:18] Ju: Léo, é indicado nós utilizarmos, hoje em dia; eu sei que o JavaScript surgiu com essa questão do dois iguais, do três iguais; mas, hoje em dia o dois iguais ainda é utilizado ou as boas práticas falam  mais para usarmos só o três iguais?

[06:36] Leonardo: Ainda tem códigos que utilizam o dois iguais, mas,  as boas práticas pedem para utilizamos o três iguais e quando for fazer  conversão, fazer de modo explícito. Então, usar *string* ou usar o *number*, usar essas funções dentro de conversão.

[05:53] Ju: Certo. Aqueles que já vimos nos vídeos anteriores, usando o *number* e o *string*.

[06:00] Leonardo: Exatamente.

[06:02] Ju: Acho que agora já ficou um pouco mais claro o que é o  dois iguais e o três iguais. Eu não tenho mais nada para acrescentar,  ficou faltando algum detalhe?

[06:14] Leonardo: Creio que seja isso para esse vídeo, Ju.

[06:16] Ju: Então, ficamos por aqui com essa questão. Lembrando que  várias coisas que começamos, nós voltamos nelas mais para frente, pode  ser que volte. 

[06:25] Ju: Mas, por enquanto é isso e nos vemos no próximo vídeo.

# Para saber mais: Mais sobre operadores

Até agora praticamos com alguns dos operadores do JavaScript, especialmente alguns dos utilizados em operações matemáticas:

| nome                        | operador |
| --------------------------- | -------- |
| Atribuição de adição        | x + y    |
| Atribuição de subtração     | x - y    |
| Atribuição de multiplicação | x * y    |
| Atribuição de divisão       | x / y    |

Começamos com os operadores mais utilizados, pois sempre que  aprendemos uma linguagem de programação nova, o melhor é absorvermos  mais conhecimentos aos poucos sobre cada assunto, em vez de tentar  dominar tudo de uma vez.

Porém, a lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas básicas, do `=` para atribuição de valor em uma variável e das comparações com `==` e `===`, utilizamos operadores para diversas outras tarefas de código, por exemplo:

- `||`: Operador “ou”, retorna `true` caso uma condição seja válida;
- `&&`: Operador “e”, retorna `true` somente se todas as condições forem válidas;
- `!=` e `!==`: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que `==` e `===` retornam `true` ou `false`.

A [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) sobre operadores tem a lista completa, com vários exemplos. Invista um  tempo para se familiarizar com cada um deles e tente pensar em exemplos  de uso para cada um.

# Operador ternário

[00:00] Ju: Continuando com algumas  particularidades do JavaScript, nós vamos ver, agora, um tipo de  operador de comparação, ou seja, ele também vai retornar o verdadeiro ou falso, mas, ele é um pouco diferente. 

[00:13] Ju: Ele é chamado de operador ternário. Ele não existe em  muitas linguagens de programação; nós vemos ele bastante em JavaScript a partir das versões mais atuais, como a ES6. 

[00:24] Ju: Léo, fala para nós o que é o operador ternário, porque  ele tem uma cara um pouco diferente do normal, do que costumamos ver.

[00:33] Leonardo: Isso, a cara dele é um pouco diferente. 

[00:36] Leonardo: O operador ternário é, basicamente, um *if*. Ele faz uma comparação, só que ele tem uma maneira especial de ser  feita, de ser escrita. Então, ele faz a comparação em uma única linha,  temos a comparação e as duas respostas do verdadeiro e do falso,  deixando bem mais curto o nosso código. Mas, tem que tomar um pouco de  cuidado, porque, às vezes, ele pode pregar um kit peça em nós, por ter a escrita reduzida.

[01:08] Ju: Vamos fazer o seguinte, vamos fazer o que sempre temos  feito, escrever um pouco de código (vou compartilhar minha tela) e criar um arquivo para guardarmos o que estamos fazendo.

[01:21] Ju: Criei um novo editor, deixa eu fechar. Vou criar um novo arquivo e vou chamar esse arquivo de “ternario.js”.

[01:37] Ju: Já que o Léo acabou de falar que o ternário funciona como um *if* (um *if*, *else*), nós vamos descobrir se uma condição é verdadeira, se uma condição é falsa, vai agir de acordo.

[01:49] Ju: Então, vamos pensar num exemplo. Por exemplo, nós só  podemos liberar; nós temos um programa e ele só vai liberar bebida se o  usuário for maior de 18 anos, ou o acesso ao sistema que fornece as  bebidas, a um usuário maior de 18 anos.

[02:04] Ju: Então, podemos ter o seguinte caso, nós temos uma `const`, que eu vou chamar de `idadeMinima` e eu vou passar para ela um número, `18`, que é a idade mínima para se beber no Brasil.

[02:18] Ju: E eu vou criar uma outra `const` chamada `idadeCliente`; e o cliente passa essa informação. Então, vamos supor que; apesar de  nesse caso podemos colocar um número direto, também. Suponhamos que  nosso cliente tenha 16 anos, e está abaixo de 18.

[02:34] Ju: Se fôssemos comparar a idade do cliente que quer beber com a idade mínima, nós podemos utilizar o `if`, que foi o que o Léo falou que usamos para fazer condicionais. Se a  condição é o que ela passa, acontece um pedaço de código, se não, não.

[02:58] Ju: `if (idadeCliente >=` (lembrando dos  operadores, nós temos igual para comparar, maior igual, menor igual);  nesse exemplo a idade tem que ser 18 ou mais, então, se a idade do  cliente o valor for maior ou igual à idade mínima `idadeMinima)` para beber, nós dizemos o que nosso programa vai fazer.

[03:23] Ju: Ele pode fazer qualquer coisa que esteja entre as chaves, no bloco de código. No nosso caso, vamos só exibir no `console.log` a opção dele, que é `(“cerveja”)`. Se, `else`, é outra condição que não for idade mínima, qualquer outra condição que  não for idade mínima, ou seja, não importa se ele tem de 17 para baixo, o resultado vai ser o mesmo. Vamos exibir no `console.log` a opção `(“suco”)`. Ou seja, ele não está liberado para beber.

[03:50] Ju: Esse é um *if* clássico. Nós o vemos na maior parte das linguagens de programação que trabalhamos comercialmente na web.

[03:58] Ju: Então, vamos testar esse código? Eu vou no terminal rodar com o `node ternário.js`. No caso, a opção é suco, porque eu determinei que o valor da minha variável `idadeCliente` é 16. Ou seja, ela não é maior ou igual a idade mínima.

[04:20] Ju: O código não entrou no bloco do `console.log(“cerveja”)`, ele foi direto para as outras condições, para o `else`, que é quando você não passa no `if`, a condição não vai.

[04:34] Ju: Esse é um *if* clássico, sem nada a acrescentar.  Então, como funcionaria essa estrutura que você falou que dá para fazer  tudo. Dá para fazer estrutura com o ternário e ficar um código de uma  linha só, é isso?

[04:54] Leonardo: Exatamente, Ju. Essas cinco linhas nós vamos colocar tudo em uma linha só, agora.

[04:57] Leonardo: Ju, vamos começar direto com o `console.log`, que vai ser nossa saída.

[05:04] Ju: Certo. Então, as constantes ficam nas primeiras linhas,  porque são elas que vamos usar para comparar. Vamos fazer o seguinte, eu vou comentar o trecho de código inteiro da linha 4 à linha 8, usando o  “CTRL+BARRA”, que é o atalho. E vamos lá, vamos começar pelo `console.log`, que é onde vai dar a saída, abre e fecha parênteses.

[05:31] Leonardo: E agora, nós fazemos a nossa comparação, igual fizemos em tudo `if`, `(idadeCliente >= idadeMinima)`.

[05:40] Ju: Certo. Então, eu já passo a comparação direto `console.log(idadeCliente >= idadeMinima)`.

[05:55] Leonardo: Temos a nossa comparação. Agora, damos um espaço o coloca um ponto de interrogação. 

[06:02] Ju: Ponto de interrogação, certo.

[06:07] Leonardo: Agora, temos a base do nosso operador ternário. Em seguida, vamos colocar na mesma ordem do `if`, o que vai ser executado, caso seja verdadeiro; então, no nosso caso  queremos incluir cerveja, e colocamos dois pontos, caso seja falso.

[06:28] Ju: Caso dê falso, é suco. Só isso?

[06:33] Leonardo: Só isso. 

[06:35] Ju: É uma estrutura bem diferente. Vamos rodar para ver se continua tudo certo?

[06:42] Ju: Vou limpar o meu terminal e rodar o meu programa, de novo. Continua dando suco, continua dando certo.

[06:49] Ju: Vamos fazer mais um teste? Eu vou passar `idadeCliente` para `= “19”`, só para testarmos o outro lado. Agora, tem que mudar para cerveja,  porque o nosso cliente tem mais de 18 anos. Deu cerveja! Certo.

[07:07] Leonardo: O operador ternário agora está funcionando igual ao *if*, no mesmo esquema do *if*. 

[07:15] Leonardo: Nós temos que tomar um pouco de cuidado com ele,  porque é possível você achar o operador ternário, dentro de um operador  ternário, e acaba sendo muito difícil de ler este tipo de código. 

[07:27] Leonardo: Vamos acabar demonstrando na aula, porque ele é  realmente bem difícil de ler e não é recomendado você fazer isso. 

[07:33] Leonardo: Quando for colocar várias condições dentro de condições, faça com *if*, que é mais fácil de você conseguir ler e da manutenção desse código depois. Essa é uma dica de boa prática.

[07:45] Ju: Nós podemos dizer que uma boa prática é quando você vai  fazer comparações que são mais curtas, não exigem, não tem, por exemplo, tanta instrução para ser feito em cada caso. Se for só para retornar  uma coisa, retornar outra coisa, aí para encurtamos o código é uma boa  prática usar o ternário, embora ele tenha uma estrutura um pouco  diferente, fica um pouco mais conciso, mais curto. 

[08:13] Leonardo: Exatamente. Agora já vimos o operador ternário  funcionando, vamos entender um pouco melhor como funciona. Antes do  nosso ponto de interrogação nós temos a nossa condição. Nesse caso, é a `idadeCliente >= idadeMinima`. Depois disso, vamos ter nossas saídas, que são: primeira saída se for verdadeiro, se for *true* e depois, a saída se for *false*, separadas pelos dois pontos.

[08:41] Leonardo: Não é difícil de ser lido ou desconstruído, mas, tem que tomar um pouco de cuidado. 

[08:46] Ju: Certo. Todo o trecho antes da interrogação é a comparação que vai ser feita. Na hora de construirmos essa comparação, temos que  ter cuidado com a *syntax*, para que o JavaScript não fique confuso com o que está acontecendo nessa parte do código.

[09:07] Leonardo: Exatamente. É sempre muito importante tomar esse cuidado.

[09:12] Ju: E por que chama operador ternário e não *if*?

[09:18] Leonardo: Por que chama operador ternário? Vamos dar uma  olhada no nosso código e vamos ver quantos operadores temos em cada  linha, executando algum comando.

[09:27] Leonardo: De início, temos nossa constante com um operador de igual, que é para defender o valor. Na linha 2 também temos uma  constante com um operador de igual. O nosso `if` tem um operador de comparação.

[09:41] Ju: Certo, maior ou igual, não é?

[09:42] Leonardo: Nossos consoles não tem nenhum operador. Agora,  damos uma olhada no nosso operador ternário e temos três operadores na  mesma linha, que é o operador de comparação.

[09:56] Leonardo: O operador que é para separar as duas partes da  nossa comparação, que é o nosso código a ser executado e a nossa  comparação. E os dois pontos que separa as duas partes dos nossos  resultados, que são o *true* e o nosso *false*.

[10:14] Leonardo: Então, como temos três operadores, nós temos o nome de ternário.

[10:20] Ju: Certo. Então, definimos de acordo com a quantidade de  operadores que está sendo utilizado, no caso. Tudo para juntar e no  final; combinam todas essas expressões, no caso 3 em uma só, que vai ser o resultado final disso, no caso é o *true* ou o *false*; *true* ou *false* não, no caso, é ou cerveja ou suco, que é o que estamos pedindo que seja a saída no nosso console.

[10:48] Leonardo: Tem alguma coisa para adicionar, Ju?

[10:50] Ju: Por enquanto, não. Nós vamos, provavelmente, ver mais  sobre ternários e você vai encontrar eles muitas vezes durante a sua  vida, desenvolvendo o JavaScript. Mas, por enquanto, eu acho que está  bom.

[11:06] Leonardo: Então, até a próxima!

[11:08] Ju: Então, até o próximo vídeo!

# Template literal

[00:00] Ju: E vamos nós para mais um vídeo sobre coisas particulares, ou quase particulares, do JavaScript.

[00:07] Ju: Dessa vez, nós vamos voltar, um pouco, onde trabalhamos com tipos *string* e vamos ver mais uma forma de se trabalhar com tipos *string* no JavaScript.

[00:20] Ju: Compartilhando a tela, abrindo mais um arquivo, que eu  vou chamar de “template-strings.js”, que é o nome da ferramenta que  vamos trabalhar agora.

[00:40] Ju: O que é uma *template* *string*? *Template* é uma tradução de modelo, então, é uma *string* modelo.

[00:49] Ju: Você não precisa se atentar muito à tradução do nome; vamos ver como funciona.

[00:54] Ju: Vimos em outra aula que conseguimos concatenar *string*, ou seja, se eu tiver uma `const nome` e disser que, por exemplo, é `= “Ju”`, que é meu nome, eu posso criar textos utilizando variáveis e inserir essas variáveis umas com as outras.

[01:14] Ju: Ou seja, eu posso criar uma outra `const` e chamar de `const apresentacao` e dizer que `= “meu nome é”`, entre *strings*, e adicionar o valor dessa variável onde eu guardei meu nome, utilizando o operador de adição, utilizando o mais. Então, o mais, ao invés de  somar números, ele também pode concatenar (que é a expressão que usamos) *strings*.

[01:42] Ju: Então, eu concateno a *string* `= “meu nome é”` com o valor da variável `nome`. E se eu pedir para o `console.log` amigo imprimir na tela o valor de `const apresentacao`; vamos rodar com o `node template-strings` e resulta em `meu nome é Ju`.

[02:05] Ju: O mesmo operador que faz soma de número também concatena *strings*; uma forma que já vimos um pouco anteriormente.

[02:17] Ju: Já vimos concatenação de *strings*, normal. Então, o que é a *template* *string*?

[02:25] Ju: Ela surgiu para facilitar a questão de concatenação,  porque, dependendo da quantidade de variáveis que você quer juntar, tudo começa a ficar muito embolado. 

[02:35] Ju: Vamos ler um exemplo um pouco mais complexo.

[02:39] Ju: Eu tenho minha `const nome = “Ju”` e vou adicionar mais algumas. 

[02:43] Ju: Vamos adicionar minha `const idade`; lembrando que as variáveis também podem salvar resultados de operação, então, a `const idade` pode salvar um número com uma idade ou o valor de uma operação, por exemplo, `2021`, que é o ano que estamos gravando este curso, com `1981`, que é a minha data de nascimento. Então, o resultado será guardado numa variável chamada `idade`.

[03:09] Ju: E uma outra `const`, que eu vou chamar de `cidadeDeNascimento` e eu vou escrever uma *string* `”São Paulo”`.  

[03:17] Ju: E como ficaria, agora, a minha apresentação?

[03:22] Ju: A minha `const apresentacao`, agora, ficaria: `= ”meu nome é” + nome` e para eu adicionar as outras informações, eu tenho que ir adicionando mais *strings* e adicionando mais concatenações com operadores. 

[03:40] Ju: Então, `+ nome +`, abro mais uma *string* e eu quero uma vírgula, então, tenho que colocar uma vírgula dentro da *string* e `”,minha idade é”`, espaço, concateno, novamente, com o valor da variável `+ idade` mais o restante da *string*, então, abro aspas, de novo, `“e nasci na cidade de”`.

[04:13] Ju: E concateno, novamente, para adicionarmos o valor da variável `+ cidadeDeNascimento` e, aí sim, `console.log` no valor da variável `nascimento`, que agora está guardando uma *string* bem grande.

[04:26] Ju: Vamos rodar, novamente, `node template-strings.js` e apareceu `meu nome é Ju, minha idade é 40 e nasci na cidade de São Paulo` é a *string* enorme, que fizemos juntando todos esses pedações de *string* com pedaços de variáveis diversas. 

[04:41] Ju: Só que isso é muito complicado, porque temos que tomar  muito cuidado com todos os espaços, as vírgulas e de colocar os mais  entre variável, etc. Então, fica bem mais complexo de ler, de encontrar  as variáveis no meio e faz nos perder.

[05:01] Ju: Léo, o que fazemos? Como a *template* *string* veio para nos ajudar a resolver essa questão, porque com o JavaScript  quando surgiu, trabalhava com muitos textos para web, então, como  resolvemos essa questão?

[05:19] Leonardo: Vamos resolver essa questão com a *template* *string*. 

[05:21] Leonardo: Na *template* *string* nós vamos escrever nossa *string* normal, só que invés de ficarmos concatenando, todos esses mais, na  hora que formos colocar o valor da nossa variável, nós vamos colocar o  símbolo do cifrão, do símbolo de dólar e abre e fecha chaves.

[05:50] Leonardo: Então, Ju, vamos recriar essa apresentação, só que agora usando *template* *string* para ver como ela fica mais organizada. Pode ser?

[05:56] Ju: Pode ser. Eu vou recriar a nossa `const apresentacao`. As variáveis que definimos com as informações permanecem; elas que vamos usar para colocar as informações variáveis. 

[06:09] Ju: Então, `const apresentacao=`; vamos fazer o seguinte, eu vou só criar *string*, vamos criar *string*, normalmente, colocando um “X” no lugar onde vai entrar as variáveis, só para definirmos. Acho que vai ficar mais fácil de entendermos.

[06:24] Ju: `”meu nome é XXX, minha idade é XXX e nasci na cidade de XXX”`. É isso que queremos escrever no final, não é?

[06:42] Leonardo: Exatamente.

[06:43] Ju: E como que transformamos essa *string* normal, que por enquanto, se rodarmos no terminal, ela vai escrever como está (“XXX”). Como transformamos ela?

[06:57] Leonardo: Então, Ju, a primeira coisa que precisamos fazer para transformar essa *string* numa *template* *string* é trocar as aspas duplas pelo acento grave.

[07:08] Ju: Certo. Lembrando, acento grave é o que usamos para escrever crase, não é? É um acento inclinado para a esquerda. 

[07:18] Ju: Troquei as aspas do começo e do final da *string* por acento grave. Por enquanto, não mudou nada. 

[07:24] Leonardo: Por enquanto, ela ainda é uma *string*. Vamos começar, agora, a colocar os valores    das variáveis dentro dessa *string*.

[07:34] Ju: Certo. Então, a primeira variável que temos que trocar é nome, que está `XXX`.

[07:40] Leonardo: Exatamente. Vamos trocar pelo símbolo do dólar e depois abre e fecha chaves e a nossa variável dentro dela.

[07:51] Ju: `meu nome é ${nome}`; certo. 

[07:52] Leonardo: É só repetirmos esse processo em todas as variáveis. Então, `minha idade é ${idade}` e `nasci na cidade de`, tiramos os três “X” `${cidadeDeNascimento}`.

[08:13] Ju: Vou rodar o console, novamente, e ver se deu tudo certo. Rodar o console não, rodar no terminal o `node template-strings.js`. `meu nome é Ju, minha idade é 40 e nasci na cidade de São Paulo`. Perfeito.

[08:27] Ju: Bacana que agora nós podemos ver que além de ser mais  fácil de escrever, mais fácil de encontrar as variáveis e a leitura fica mais fluida, também, porque conseguimos ler o que está acontecendo.  Onde estão as vírgulas, onde estão os espaços e conseguimos, também,  nesse caso, quebrar linhas. Ele aceita quebra de linha.

[08:49] Leonardo: Aceita quebra de linha nesses casos. 

[08:53] Ju: Essa é a tal da *template* *string*. É a terceira forma de escrevermos *string*, que é aspas simples, aspas duplas e, agora, no final, a terceira forma  com acento grave, que utilizamos para fazer esse tipo de concatenação,  que é novo. Esse tipo de concatenação é relativamente novo, ele vem a  partir do ES6 e facilitou bastante a vida de quem tem que trabalhar com  vários trechos de textos de *strings* e juntar eles, concatenar.

[09:27] Leonardo: É muito importante lembrarmos que, não obrigatoriamente, todas as *strings* com acento grave são *template* *strings*; elas ainda podem ser tratadas só como *strings*.

[09:40] Ju: Certo. Eu não tenho mais, por enquanto, nenhuma dúvida sobre *template* *string*, agora é praticar, não é? 

[09:47] Leonardo: Muito importante.

[09:50] Ju: Então, ficamos por aqui e até o próximo vídeo.

# Praticando os operadores

Algo muito comum para quem trabalha com desenvolvimento de software é a comparação de valores entre variáveis ou objetos para executar ou um  comportamento, ou outro. O resultado dessas comparações são dois: `true` ou `false` (verdadeiro ou falso).

Para testar nossos conhecimentos nos operadores de comparação do JavaScript, observe as variáveis abaixo:

```ini
a = []
b = 20
c = true 
d = ''
```

Analise as comparações abaixo e marque aquelas cuja saída no console será **verdade**.

- Alternativa correta

  `if (b === 20 && c != false && d == 0) {    console.log('Verdade') } else {    console.log('Falso') }` 						 					

Alternativa correta! Certo! A variável `b` possui o mesmo valor e o mesmo tipo e a primeira comparação é verdadeira. Como o  valor armazenado na variável `c` é `true` e a comparação diz que `c` **não é falso**, o resultado também é verdadeiro. Na última comparação, o valor de `d`, que é uma string vazia é comparado com `0` e isso também é verdadeiro. Sendo assim,  saída do console será **Verdade**.

Alternativa correta

```
if (a == 0) {    console.log('Verdade') } else {    console.log('Falso') }
```

Alternativa correta! Certo! O valor de uma lista vazia é zero, e ao comparar com um número, temos `0 == 0` resultando `true`.

Alternativa correta

```
if (d) {    console.log('Verdade') } else {    console.log('Falso') }
```

Quase... Uma string vazia no JavaScript é considerada `false`.

Alternativa correta

```
if (b == '20') {    console.log('Verdade') } else {    console.log('Falso') }
```

- Alternativa correta! Certo! Quando comparamos `20` do tipo inteiro com `'20'` do tipo string com o operador `==` (igual, igual), apenas os valores das variáveis são comparados, resultando no valor `true`.

# Faça como eu fiz: Utilizando ternários e templates

Nesta aula vimos alguns conteúdos diversos sobre JavaScript, mas como podemos juntar tudo o que foi estudado?

Retornando ao exemplo de bebidas para menores e maiores de idade,  vamos criar algumas variáveis para identificar um cliente, sua idade e  as opções de bebidas.

```cpp
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
```

Os operadores - **entre outras coisas** - são usados para comparar condições, algo que é muito usado em lógica de programação. A notação `${}` permite a inserção de valores de variáveis dentro de uma string de texto, mas não somente isso; vamos testar uma coisa nova:

```javascript
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
```

O resultado exibido no terminal é a frase completa: 

```bash
Leo diz: "por favor, quero beber cerveja"
```

Isso porque  no início do código foi atribuída à variável `idade` um valor `23`, ou seja, maior do que `18`.

Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:

\1) O uso de operadores: `>=` como operador de comparação entre o valor da variável `idade` e `18` e também o operador ternário como condicional para retornar o valor da variável `bebidaMaior` ou `bebidaMenor` de acordo com o resultado da comparação.

\2) Template strings: Utilizamos a sintaxe do acento grave + `${}` em conjunto com as aspas duplas `””`. Teste também com aspas simples!

\3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o `${}`, mas também fazer operações com JavaScript - por exemplo, condicionais - e inserir o correspondente ao `true` ou `false` na string de texto.

​		  		

# O que aprendemos?

​				                       

## Nesta aula vimos:

- A diferença entre fazer comparações com `==`, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e `===`, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
- Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um `?`, seguido da possibilidade *true*, um `:` e a possibilidade *false*, ou seja, `comparação ? true : false`.
- O porquê do nome “operador ternário”, que se deve ao fato de termos 3  operadores juntos em uma única linha para desempenhar uma tarefa e  devolver um resultado.
- O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se  junta 2 strings), e foi introduzido no ES6.
- Como usar a template literal, escrevendo o texto entre acentos graves (``) e colocando as variáveis com `${variavel}` para que o valor deles fique nessa posição.



​				  		

​				                       