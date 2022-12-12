# Projeto da aula anterior

Você pode [baixar o zip](https://github.com/alura-cursos/2206-fundamentos-js/archive/refs/heads/master.zip) ou acessar o link do repositório no [GitHub](https://github.com/alura-cursos/2206-fundamentos-js)!

# Funções

[00:00] Ju: Nos vídeos anteriores, eu e o Léo fomos mostrando algumas partes que são essenciais, partes  fundamentais para nós começarmos a trabalhar com uma linguagem de  programação, pelo menos, uma linguagem de programação mais moderna, mais comercial, das mais utilizadas.

[00:15] Ju: Começamos, então, com tipos. Falamos de tipo *booleano*, tipo número, tipo *string*, deixamos material extra sobre outros tipos. Como criar variáveis, o que são variáveis, como trabalhamos com elas. Trabalhamos, também, com  operadores; operador de conversão, operador de concatenação, soma,  operações matemáticas, entre outras coisas.

[00:39] Ju: Agora, vamos juntar tudo num bloco que é muito importante estudarmos com calma, que são as funções. 

[00:49] Ju: Eu vou criar; antes de tudo eu vou compartilhar a minha  tela; vamos trabalhar um pouco para entender o que são as tais das  funções. “funcoes.js”, estou criando já o arquivo.

[01:04] Ju: As funções, nós trabalhamos com elas, basicamente, em  toda a linguagem de programação que trabalhamos, hoje em dia. Não  consigo pensar em nenhuma que não utilize, se tiver alguma o Léo me  fala.

[01:15] Ju: Mas, por que precisamos de funções? Por que elas são tão importantes? 

[01:22] Ju: Vamos pensar num pedaço de código, num trecho de código. Eu vou criar uma `let`, lembrando que *let* é um tipo de variável que conseguimos reatribuir, trocar o valor dela. Vou chamar de `let x`, a letra “X”, e eu vou passar para ela uma *string* vazia, ou seja, só vou abrir e fechar aspas.

[01:48] Ju: Depois disso, `console.log(x)`, e logo em seguida, na terceira linha, eu vou reatribuir ao valor dessa *let* uma outra *string*, só que, agora, invés de uma *string* vazia eu vou passar `”oi”`, uma *string* só com o texto oi. 

[02:08] Ju: Se nós rodarmos esse pequeno trecho de código, eu vou rodar com o `node funcoes.js; ele não exibiu, estou na pasta errada. Vou rodar esse código com o`node funcoes.js` e ele deu espaço porque ele tentou exibir o valor da *string* “x”, mas, é uma *string* vazia.

[02:35] Ju: Ou seja, o que aconteceu? Eu reatribuí na linha 3, depois da linha do console, eu estou reatribuindo `“oi”` à essa variável `x`. Só que o JavaScript executou uma linha depois da outra. Então, ele  executou a primeira linha, criou a variável, executou a segunda que eu  chamei o console e reatribuiu; só depois que exibiu no terminal, ele  reatribuiu para a variável `x` o valor de `”oi”`. 

[03:01] Ju: O que acontece? Se vamos escrevendo o código numa linha  embaixo da outra, nós não temos como avisar ao JavaScript, ou qualquer  linguagem de programação, que horas queremos que determinado trecho de  código aconteça.

[03:14] Ju: Isso é um problema, porque o código é um programa. Ele  precisa de informações vindas de várias partes e não podemos deixar um  pedaço de código, que depende de uma parte, rodar antes que ela chegue.

[03:26] Ju: Ou seja, eu não posso pedir para um programa rodar uma  informação que depende do usuário, se o usuário, por exemplo, não  preencher a senha dele.

[03:36] Ju: Como resolvemos isso? A função, ela isola e permite que  fechemos um bloco de código (vamos ver como isso acontece) e podemos  dizer, exatamente, quando queremos que esse pedaço de código seja  executado.

[03:53] Ju: Então, se eu quiser mudar, fazer isso de uma forma diferente, eu uso a palavra-chave `function`, de função, eu dou à ela um nome (eu vou, por enquanto, comentar o  trecho anterior; as três linhas anteriores) eu vou chamar de `function x`. Eu vou dizer que essa função x, entre parênteses, ela vai receber um nome, essa função x vai receber uma *string* de texto.

[04:25] Ju: Eu vou colocar que ela recebe um `(texto)`, abre e fecha chaves, e, aí sim, `console.log` no valor de texto, que é o valor que vai ser recebido.

[04:38] Ju: A estrutura da função é essa. Nós colocamos o nome dela,  nós escrevemos a palavra função, na verdade, dá um nome para ela, que eu dei `x`, mas, eu vou dar um nome melhor; vou dizer que o nome dessa função é `imprimeTexto`.

[04:54] Ju: E eu vou dizer que para essa função conseguir rodar, ela  precisa receber uma informação. Lembra que falamos sobre as funções  poderem receber informações vindas de outros lugares e, aí sim, serem  executadas? Ela vai receber um texto, vai receber uma *string*.

[05:18] Ju: Entre abre chaves, fecha chaves; lembrando que isso é um  bloco de código; nós podemos dizer o que queremos que aconteça, no caso, `console.log` no valor que essa função vai receber.

[05:36] Ju: Léo, o que você acha que vai acontecer se eu rodar com o `node funcoes.js`? 

[05:41] Leonardo: Se você rodar agora, imagino eu que não vá imprimir nada; você não está passando nada para essa função imprimir na tela.

[05:48] Ju: Exatamente! Se eu rodar, não acontece nada. Não dá erro, também, porque não tem erro no código.

[05:55] Ju: O que acontece é que a função tem dois momentos. O primeiro momento (eu vou deixar a minha *string* na linha 6) da função é quando declaramos a função. Então, declaramos e dizemos o que ela faz. A minha função só imprime texto, mas, a função,  também, tem outro momento, que é quando executamos a função uma ou mais  vezes.

[06:27] Ju: Lembrando, que conversamos lá atrás, usamos a função para que um pedaço de código só seja executado no momento em que queremos. 

[06:38] Ju: E como passamos para o código ‘Código, quero que isso  aconteça nesse momento’? Nós executamos a função; como executamos a  função? Chamando ela pelo nome, então, `imprimeTexto` e entre parênteses dizemos qual é o texto que queremos que seja impresso.

[06:57] Ju: Lembrando que texto é um nome que damos para sabermos  (nós humanos, pessoa que está lidando com o código) o que está sendo  esperado. Então, essa função espera receber um texto. 

[07:08] Ju: Eu vou passar, primeiro, `(“oi”)`. Agora será que funciona?

[07:16] Leonardo: Agora deveria funcionar, deveria imprimir “oi”, correto?

[07:21] Ju: Vamos ver. Eu vou rodar, de novo, e agora assim ele imprimiu `oi`, porque esse é o momento em que eu pedi para o JavaScript, chamando a  função pelo nome e passando para dentro dela, entre parênteses, o texto  que eu quero que seja exibido no console.

[07:39] Ju: Então, dessa forma, acontecem duas coisas. Primeiro, eu  consigo dizer, exatamente, se e quando eu quero que essa função seja  executada. E outra coisa muito importante da função, que a mesma função  pode ser escrita, criada para funcionar com diversos tipos de texto. 

[08:09] Ju: Então, imprimi com o texto ´”oi”`, agora, imprimo com`”outro texto”` a mesma função, ou seja, reaproveitamos o código. 

[08:10] Ju: Vamos tentar rodar, novamente. Chamei a função com o dado de `”oi”` e chamei, de novo, a mesma função, só que passando um `”outro texto”`, literalmente uma *string* escrita `”outro texto”`, e exibi os dois resultados.

[08:25] Ju: Esses são os dois momentos da função. Mas, Léo, o que podemos falar, um pouco mais afundo, sobre o que são funções.

[08:37] Leonardo: Sobre o que são funções. As funções nesses trechos  de código, que separamos em declaração e quando mandamos chamar, a Ju  escreveu as duas partes para nós já. Onde tem a palavra chave função,  nessa palavra reservada *function*, é onde está nossa declaração, que no caso está na linha 7, e nós colocamos o nome nela e, em seguida, colocamos o abre e fecha parênteses e dentro botamos o parâmetro.

[09:06] Leonardo: Vamos ver, mais para frente, como funcionam os parâmetros e algumas coisas relacionadas aos parâmetros. 

[09:15] Leonardo: Depois, fazemos a chamada da nossa função. O  interessante da função é que podemos reutilizar uma parte de código, ou  seja, conseguimos utilizá-la várias vezes durante o nosso código,  durante o nosso programa. 

[09:27] Leonardo: E fazer com que nós não precisemos ficar repetindo  esse bloco de código várias vezes, escrevendo ele de novo e de novo e de novo. 

[09:35] Leonardo: O JavaScript também tem três jeitos de escrevermos  as funções. Nós vamos ver todos eles com bastante calma, para passar a  entender tudo que eles fazem e quais são as diferenças entre eles.

[09:52] Ju: Nós já vimos, um pouco, sobre como nós declaramos, para  que elas servem; lidamos melhor com nosso código se ele estiver fechado  em pequenas partes, que conseguimos controlar melhor.

[10:14] Ju: Então, como o Léo falou nós vamos passar pelas três  formas que o JavaScript tem de se escrever funções. Esta forma que  mostramos é a chamada declaração de função. Ela tem a estrutura que você usa a palavra-chave *function*, coloca nome, coloca parênteses,  abre e fecha chaves. Essa é a forma mais clássica e a forma que existe  em várias linguagens bem similares.

[10:52] Ju: Mas, existem algumas outras formas, eu e o Léo vamos passar para vocês um pouco mais a frente.

[10:58] Ju: Uma coisa para notarmos é que neste exemplo eu e o Léo usamos texto, usou uma *string*, mas, a função pode receber outros tipos de dados para trabalharmos com  ela. Então, se quiséssemos, por exemplo, somar dois números (pode usar  números), pode ser *booleano*, o que quisermos.

[11:18] Ju: E, também, uma `function soma` pode ser criada sem nada, sem receber nada; pode ser só abre e fecha parênteses, e resolvemos ela dentro dos blocos.

[11:32] Ju: Nós vamos ver casos melhores, mas, para exemplo, vamos  dar uma olhada em como ficaria para fazermos uma função que não recebe  parâmetro nenhum.

[11:42] Ju: Criei uma função com a palavra-chave *function* soma, abre e fecha parênteses sem nada dentro, abre e fecha chaves e dentro eu vou escrever o que eu quero que aconteça.

[11:55] Ju: Dentro da função eu vou criar uma `const`, vou chamar de `resultado` e eu vou pedir, por enquanto, para ela me retornar `= 2 + 2`. 

[12:09] Ju: Criei uma `const`, chamei de `resultado` e essa *const* vai guardar o valor dessa soma, dessa operação de 2+2. Então, lembrando que essa primeira parte, quando declaramos função, se eu quiser  executar a função eu preciso chamar ela só pelo nome e, mesmo que não  tenha nenhuma informação entre parênteses, é óbvio que ainda precisamos  passar, informar para o JavaScript.

[12?35] Ju: Vamos rodar esse código, só para ver o que acontece.  Então, rodou ‘oi’, ‘outro texto’ (são meus exemplos anteriores). Eu vou  comentar esses exemplos, para o nosso terminal ficar um pouco mais limpo e vou rodar, novamente.

[12:51] Ju: Léo, não aconteceu nada, embora eu tenha passado as  instruções dentro da minha função. Será que faltou o console.log na  soma, de repente?

[13:07] Ju: Vamos tentar?

[13:09] Ju: `console.log` eu acho que faltou.

[13:14] Ju: Dentro de `console.log` eu posso executar uma função entre parênteses, do `console.log`? Podemos! Vamos ver se isso funciona. Deu indefinido, embora tenha passado e resultado.

[13:30] Ju: Léo, fala para nós o que está acontecendo, porque é uma questão bem importante quando trabalhamos com funções.

[13:37] Leonardo: O que está acontecendo é você está chamando a  função, a função está sendo executada, só que ela não está te dando  nenhuma resposta. Então, ela entra na `function soma`, declara a nossa constante `resultado` e põe o valor dela como `2 + 2`.

[13:57] Leonardo: E, acaba a nossa função, volta para o `console.log`, só que não tem o que imprimir, porque nossa função retornou nada, então, nós temos uma palavra chave que chama *return*, que é retorno.

[14:12] Leonardo: Nós vamos especificar o que queremos que volte da  nossa função como uma resposta, nesse caso, para nossa conta. 

[14:20] Leonardo: Ju, você pode colocar o `return` para nós?

[14:24] Ju: Certo. Nesse caso, então, nem precisaríamos dessa `const resultado`, não é?

[14:30] Leonardo: Nesse caso, não. Não precisamos declarar uma variável para dar o *return* da variável. Nós podemos retornar direto à nossa conta.

[14:43] Ju: Na função soma eu troquei a variável, lembrando que a  variável, como o Léo falou, está sendo criada, está guardando essa  informação, mas, não pedimos, em nenhum momento, para essa função  retornar o valor, que chamamos; mandar essa informação de `2 + 2` para fora dela, para fora deste bloco de código.

[15:06] Ju: É o que nós falamos em outra aula, a função guarda,  restringe blocos de código para ele ficar mais preso no lugar dele, e  não sair vazando, fazendo o que não deve.

[15:18] Ju: Será que agora funciona?

[15:21] Leonardo: Vamos testar.

[15:22] Ju: Vamos testar. Então, `node funcoes.js`, agora funcionou. Está exibindo 4 no console, que é o resultado de 2 + 2.

[15:31] Ju: Isso é bacana prestarmos atenção, porque muitas vezes o  código não faz o que queremos, mas, isso não quer dizer que tenha erros  no código.

[15:41] Leonardo: Exatamente. Às vezes, você tem algum problema de  lógica, mas, o código em si é um código válido e um código que funciona.

[15:51] Ju: Sim, nós temos que aprender a conversar com a linguagem de programação para ela fazer o que queremos que ela faça.

[16:02] Leonardo: Sim, é muito importante. 

[16:04] Leonardo: Ju, vamos fazer mais um teste só? Tem aquela primeira função que criamos, ela ainda está funcionando, certo?

[16:11] Ju: Certo.

[16:12] Leonardo: A `imprimeTexto`?

[16:13] Ju: Sim.

[16:14] Leonardo: Vamos passar o `return` da soma dentro do `imprimeTexto`, para ver o que vai acontecer? Fazer uma função dentro de um parâmetro de uma função.

[16:26] Ju: Vamos. Eu vou comentar o nosso `console.log(soma)`. Como podemos fazer isso, então, Léo? Chamar uma função dentro de uma outra função?

[16:38] Leonardo: A nossa `imprimeTexto`, como fazíamos para chamar ela antes? Nós colocámos o `imprimeTexto(nossotexto)`. Então, podemos só colocar `imprimeTexto`, abre parênteses e o nome da função que vamos chamar, no caso, soma, e fecha parênteses.

[17:03] Ju: Agora começa a ficar interessante, uma função dentro de outra função. Vamos executar que eu estou curiosa.

[17:12] Ju: Vou limpar o terminal e continua exibindo resultado (vejam que eu comentei o `console.log(soma)`), então, realmente, o que está acontecendo é que o nosso código está executando a função `imprimeTexto`.

[17:31] Ju: Só que uma vez que executamos a função soma dentro dos  parênteses, o JavaScript vai pegar a função soma (me corrige se eu  estiver errada, Léo); ele está executando a função soma, pegando o valor de retorno dela, que é 2 e passando o 2 para dentro de `(texto)`.

[18:01] Ju: Então, o bloco de `function` deixa de ser *string* e passa a ser 2, que é o valor de soma.

[18:11] Ju: Nós fizemos uma dancinha das cadeiras, fomos tirando as  coisas de um lugar, passando para outro e passando para outro; e isso é  comum no dia a dia. Em linguagens de programação chamamos a função, pega o resultado de uma função, passa para outra e assim vamos fazendo com  que cada trecho de código faça, exatamente, pequenas tarefas e essas  pequenas tarefas viram uma tarefa grande. É isso?

[18:38] Leonardo: É isso. E tem uma vantagem muito importante de  quebrarmos o nosso programa em funções relativamente pequenas, que fica  mais fácil para nós lermos. Nós sabemos o que, exatamente, aquele trecho de código está fazendo. Conseguimos reaproveitar o trecho do código e  fica bem mais fácil darmos manutenção.

[18:56] Leonardo: O que é essa manutenção? É nós tentarmos colocar alguma *feature*, uma característica nova no nosso programa.

[19:06] Leonardo: Então, conseguimos colocar essa característica, às vezes, reaproveitando coisas que já foram escritas antes.

[19:13] Ju: Perfeito. Lembrando que o console em si não interfere na  execução do programa. Então, para o que o programa faz, ele vai exibir  no console ou não, mas, o console é uma informação para quem está  desenvolvendo, então, não adianta só ter o console.log e não ter  retorno, se você quiser que sua função disponibilize os dados dela para  outras partes do código.

[19:42] Ju: Uma informação bacana de passar nesse momento é que essa palavra chave, essa cláusula, que chamamos de `return` ela tem que ser a última linha da função.

[19:55] Ju: Acho que não chegamos a comentar isso, não é, Léo?

[20:00] Leonardo: Não chegou a comentar isso, mas, é bem interessante.

[20:05] Ju: Então, antes da linha do retorno, podemos ter outros  códigos, podemos ter várias coisas que acontecem, podemos ter vários  console.log; os exemplos vão ficando mais interessantes, à medida que  vamos estudando mais. 

[20:21] Ju: Mas, a linha do retorno tem que ser a última antes de  fechar o bloco, porque depois que passou pela palavra chave retorno, ele retornou o que tinha que fazer e meu Script sai da função e não vê mais nada.

[20:38] Leonardo: Exatamente. Não é proibido escrever coisas depois  do retorno, porém, essas coisas não serão executadas, tenha isso em  mente.

[20:46] Ju: Exatamente. Eu acho que, por enquanto, também já falamos  bastante de função. Podemos passar para mais alguns detalhes, no próximo vídeo?

[20:58] Leonardo: Vamos para mais detalhes no próximo vídeo.

[21:02] Ju: Até a próxima.

[21:03] Leonardo: Até

# Para saber mais: Mais sobre funções

As funções ajudam muito no desenvolvimento de um código, pois  colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas  funções prontas, como é o caso de funções matemáticas (Math em inglês),  alguns exemplos são:

- `Math.round()`: Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
  - `Math.round(4.3)` retorna 4
  - `Math.round(3.85)` retorna 4
  - `Math.round(2.5)` retorna 3, quando o número termina com 0.5 a função arredonda para cima
- `Math.ceil()`: Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
  - `Math.ceil(5.2)` retorna 6
- `Math.floor()`: Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
  - `Math.floor(5.2)` retorna 5
- `Math.trunc()` : Desconsidera os números decimais, o que é conhecido como truncamento.
  - `Math.trunc(4.3)` retorna 4
  - `Math.trunc(4.8)` retorna 4
- `Math.pow()` : Faz a exponenciação de 2 números,  quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a  multiplicação por ser mais rápido.
  - `Math.pow(4 , 2)` retorna 4^2 = 16
  - `Math.pow(2.5 , 1.5)` retorna 2.5^(3/2) = 3.9528 ...
- `Math.sqrt()` : Retorna a raiz quadrada de um número.
  - `Math.sqrt(64)` retorna 8
- `Math.min()`: Retorna o menor valor entre os argumentos.
  - `Math.min(0, 150, 30, 20, -8, -200)` retorna -200
- `Math.max()`: Retorna o maior valor entre os argumentos.
  - `Math.max(0, 150, 30, 20, -8, -200)` retorna 150
- `Math.random()`: Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
  - `Math.random()` retorna 0.7456916270759015
  - `Math.random()` retorna 0.15449802102729304
  - `Math.random()` retorna 0.4214269561951203

Para ver mais funções matemáticas, basta acessar a [documentação do Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description).

# Para saber mais: Tipos de funções

Os parâmetros e o retorno das funções são utilizados de acordo com  cada caso específico. Isso significa que nem sempre todas as funções que escrevemos vão precisar de um ou de outro para fazer o que precisam. Abaixo temos mais exemplos para entender melhor algumas situações.

**Função sem retorno e sem parâmetro: A função abaixo apenas  executa uma instrução, sem a necessidade de disponibilizar o resultado  para o restante do código. Neste exemplo escolhemos usar uma string  fixa, então não há necessidade de parâmetros.**

```scss
function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar()
```

**Função sem retorno, com parâmetro: similar à anterior, porém agora a função  recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida  com o nome de qualquer pessoa (desde que esteja no formato de dado `string`.**

```javascript
function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')
```

**Função com retorno, sem parâmetro: É possível combinar funções para que cada  uma controle apenas uma parte do código e elas trabalhem juntas.**

No caso abaixo, a função `cumprimentar()` não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função `cumprimentaPessoa(nomePessoa)`. **Isso significa que a string ”`Oi gente!`” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave `return`**.

```javascript
function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
```

A função `cumprimentaPessoa(nomePessoa)` recebe como parâmetro uma string onde podemos passar qualquer nome no  momento em que executamos (ou chamamos) a função. Quando isso acontecer, a função `cumprimentar()` será executada também, e seu valor de retorno - a string `Oi gente!` - vai ocupar o lugar do `${}` onde a função está sendo chamada.

**Função com `return` e mais de um parâmetro:  Lembrando que as funções podem receber a quantidade de parâmetros  necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou  seja, no exemplo abaixo o parâmetro `numero1` se refere a `15`, o parâmetro `numero2` se refere a `30` e o parâmetro `numero3` se refere a `45`. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos  parâmetros de acordo com o dado que a função espera receber - no caso,  números.**

```scss
function operacaoMatematica(numero1, numero2, numero3) {
 return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90
```

**Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a \*parâmetros\* no momento em que a função é definida (no caso, `numero1`, `numero2`, etc) e \*argumentos\* como os dados que utilizamos para executar a função (ou seja, `30`, `45`, etc).**

Ainda há muito o que estudar no tema de funções, então pratique bastante pois parâmetros e retorno são conceitos essenciais.

# Utilizando parâmetros

Existem diversas linguagens de programação, como Javascript e Python. Cada uma delas possui sua própria sintaxe e em alguns momentos, se  comportam de forma diferente. 

Quando executamos uma função em Python que espera um parâmetro e ele não é passado, recebemos uma mensagem de erro `TypeError: comParametro() takes exactly 1 argument (0 given)`, indicando que a função `comParametro` espera um parâmetro. Porém, isso não acontece no JS.

Observe o seguinte código:

```scss
function comParametro(param) {
    console.log(param)
}
comParametro()
```

Analisando o código acima, selecione a alternativa correta. 

- Alternativa correta

  A palavra `param` será exibida no console.

​				 			 		 	

Alternativa correta

Como nenhum parâmetro foi passado, a saída do console será `undefined`. 						 					

Alternativa correta! Certo! Em JavaScript, os parâmetros de funções tem `undefined` como valor predefinido.

Alternativa correta

Diferente do TypeError do Python, no Javascript receberemos um `SyntaxError: Unexpected end of function`.

# Expressão de função

[00:00] Ju: Continuando com funções,  já vimos como declarar uma função, como executar uma função e o que são  parâmetros de função. 

[00:09] Ju: Mas, quando estamos, às vezes, pesquisando em  documentação JavaScript, às vezes vemos uma outra forma utilizada para  escrever funções. Vamos dar uma olhada nela agora.

[00:21] Ju: Eu vou criar um novo arquivo e vou chamar de “expressoes.js”.

[00:26] Leonardo: Ju, só uma coisa. Você pode compartilhar a tela para nós?

[00:29] Ju: Sempre esqueço de compartilhar a tela, toda vez eu esqueço.

[00:32] Ju: Eu não vou criar nada, vou voltar, compartilhar (bem  lembrado Léo) minha tela, minha tela agora está compartilhada. Vou, aí  sim, criar um novo arquivo e vou chamar esse arquivo (eu já estou na  pasta certa) de “expressoes-funcao.js”.

[01:01] Ju: Como estávamos falando, normalmente, a forma mais  clássica de escrever função em JavaScript e diversas outras linguagens é quando escrevemos `function`, escrevemos o nome da função `minhaFuncao` e pode ou não passar parâmetros, ou `(param)`, como costumamos reduzir.

[01:19] Ju: E dentro dela, bloco de código diz o que ela faz. Então,  declaramos uma função e na hora que queremos executar essa função, nós  chamamos, dizemos, inclusive, essa palavra, chamar a função, passando o  parâmetro necessário para ela `(“param”)`, seja uma *string* ou uma outra função, um texto, um número ou outros tipo de dados que  não vamos ver nesse curso, mas, que você vai ver nos seus estudos. 

[01:53] Ju: Mas, tem um outro tipo de função que chamamos de  expressão de função. É uma outra forma de se escrever funções em  JavaScript.

[02:03] Ju: Como escrevemos, então? Começamos criando uma `const`, uma variável, eu vou chamar de `soma`, para fazermos uma função de soma. Então, `const soma =`, aí sim, a palavra `function`, passo e abro e fecho parênteses. 

[02:19] Ju: Vou passar dois parâmetros, então, por exemplo, `(num1, num2)` para fazermos a soma entre dois números. Aí sim, eu abro e fecho chaves e passo dentro dela `return`, aquela palavra, aquela cláusula que já estudamos, `(return num1 +num2)`, que eu quero que a função soma faça. 

[02:48] Ju: Se eu quiser executar é a mesma coisa. Podemos pedir para o `console.log` para executar a função soma, passando para dentro dela os números que quero somar, por exemplo, `console.log( soma(1, 1 ))`. 

[03:02] Ju: Eu vou só comentar a declaração de função que fizemos em  cima, salvar esse código e rodar ele (já estou dentro da pasta no meu  terminal) e vou rodar ele com `node expressões-funcao` e exibiu o 2.

[03:21] Ju: Mas, uma coisa que é importante. Às vezes, quando falamos ‘Você pode escrever função de uma forma A ou você pode escrever função  da forma B’ parece a mesma coisa, mas, nem sempre é.

[03:33] Ju: Vamos ver agora, o Léo vai nos falar algumas diferenças  entre essas duas formas de escrever, porque, às vezes, parece que é a  mesma coisa, mas, não e quando não é, pode dar *bug*.

[03:45] Ju: Léo, nos ajude a identificar as diferenças entre a forma  declarativa (vou escrever na primeira linha, para sabermos, declaração  de função e a expressão de função).

[04:00] Leonardo: A nossa expressão de função nós não temos um nome  da função, realmente. Nós criamos uma variável, que é o caso que criamos com `const`, e atribuiu a nossa função a essa variável. 

[04:15] Leonardo: É importante ser *const* para não acabarmos colocando um valor dentro dela e apagando a nossa função no meio de código.

[04:24] Leonardo: Então, a nossa declaração não tem nome,  propriamente dito, o nome é opcional e, geralmente, não usamos ele. E,  também, acaba sendo um jeito mais curto de escrevermos a função, porque  não ocupamos várias linhas, fazemos tudo numa linha só. Fica bem mais  curta.

[04:43] Ju: Se nós tentarmos quebrar tudo numa linha só, usando a declaração, vai funcionar?

[04:54] Leonardo: É possível fazer, do mesmo jeito que você fez,  porém, não é muito recomendado, porque seu código acaba ficando meio  estranho. Não é uma boa prática fazer desse jeito, é bom quebrar as  linhas, quando possível.

[05:10] Ju: Perfeito. Então, tem a questão de boas práticas, também.

[05:13] Ju: Vimos que as funções que criamos com expressão de  funções, normalmente, são anônimas, elas não têm um nome. O que tem nome é a *const* que usamos para executar ela, mas, a função em si,  embora ela possa ter um nome, como o Léo disse, nós, normalmente, não  usamos, deixamos ela sem nome. 

[05:36] Ju: Essas são algumas diferenças, mas, tem uma diferença que é a principal. Ela é a mais importante de sabermos entre expressão de  função e a declaração de função.

[05:51] Ju: Eu vou escrever um código, o Léo vai mostrar para vocês qual é, exatamente, essa diferença. 

[05:57] Ju: Vamos fazer o seguinte, eu vou comentar, por enquanto,  apenas as linhas anteriores, onde as funções que já escrevemos estão  sendo executadas. Vou deixar elas escritas e vamos ver qual é a  diferença principal. Vou colocar várias interrogações no código para nós falarmos mais sobre ela.

[06:19] Ju: Eu vou criar uma função, uma `function`, do modo declarativo com a palavra-chave *function*, e o nome dessa função vai ser `apresentar`. Eu não vou passar nenhum parâmetro para ela, o que essa função vai fazer e dar `return`, eu vou dar um retorno numa *string* `”olá”`; uma apresentação, estou falando olá.

[06:43] Ju: Declarei a função. Acima dela (eu criei essa função na minha linha 18), na linha 16 eu vou chamar com o `console.log` a função `apresentar`.

[07:00] Ju: ‘Ju, mas, eu posso fazer isso? Eu posso chamar a função,  pedir para executar a função na linha de cima que ela está sendo  declarada?’. Vamos fazer um teste. Eu vou limpar o meu terminal, rodar `node espressoes.js` e apareceu `olá`. Descobrimos que nós conseguimos fazer isso.

[07:29] Ju: Vamos fazer outro teste, então. Eu vou criar outra `const soma`; na verdade, vou usar a mesma `const soma`. Eu vou tirar ela de onde estava; na verdade, vou copiar e comentar ela e vou colar embaixo, na linha 23, só para termos todos os códigos juntos.

[07:48] Ju: Eu vou fazer a mesma coisa que eu fiz na declaração `apresentar`. Eu tenho a minha `const soma = function` passando o parâmetro e na linha de cima dela, na 22, eu vou chamar o `console.log(soma` passando `(1, 1))`, que são os parâmetros para fazermos a nossa soma, que tem que dar 2, de novo.

[08:10] Ju: Eu limpo o meu terminal e tento executar esse código e vamos ver o que aconteceu.

[08:18] Ju: O “olá” da função anterior, que era função declarada,  continua, mas, na hora que o JavaScript tentou executar a função que foi feita com expressão de função, função soma, ele deu um erro de  referência. 

[08:34] Ju: Ele diz que não consegue acessar `soma` antes  da inicialização. Então, Léo, fala para nós o que está acontecendo,  porque esse é um comportamento do JavaScript que é muito importante  entendermos como funciona, para resolvermos esse tipo de *bug*.

[08:50] Leonardo: Ju, o que está acontecendo é o seguinte. Quando fizemos a declaração de soma com o *const*, ela se comporta igual uma variável. E como uma variável no JavaScript,  nós não podemos usar ela, a não ser que já tenhamos passado por ela,  iniciado ela alguma vez.

[09:11] Leonardo: A exceção disso é o caso das funções que declaramos com um nome ou as var. Nesse caso, o interpretador do JavaScript vai  passar pelo nosso código e puxar todas essas declarações para o topo do  nosso código. Então, ele vai, primeiro, iniciar todas essas declarações e todas as nossas `var`, e depois vai executar o nosso código. Então, não temos esse problema, não temos esse perigo.

[09:40] Leonardo: Esse trabalho que ele faz, chamamos de *hoisting*, que é içar ou levantar; que é, exatamente, trazer todas essas declarações para cima do nosso código, no topo dele.

[09:54] Ju: Então, podemos dizer que o JavaScript antes de fazer  qualquer coisa no código, ele lista as funções que são declaradas e o  que é declarado como var, e antes de começar qualquer coisa, ele já sabe o que é. Então, por isso que funciona se nós chamarmos a função  declarada antes dela existir, entre muitas aspas no código.

[10:18] Leonardo: Exatamente. 

[10:20] Ju: Hoje em dia, como usamos bastante, no dia a dia, a forma de expressão de função, com *const*, por exemplo, como fizemos nessa aula; normalmente, usamos *const*, mesmo. É importante se acontecer esse erro com você, você ter em mente que é um comportamento do JavaScript, o *hoisting*. Esse é um detalhe importante para ter em mente. 

[10:48] Ju: Esperamos que você não tenha muitos *bugs* no  caminho e fique com a palavra chave no seu dicionário de JavaScript  mental. Quando você precisar, lembrar o porquê de certos comportamentos, não é, Léo?

[11:05] Leonardo: Exatamente, é muito importante para não aparecerem erros no futuro.

[11:10] Ju: Mais alguma coisa que podemos falar, como *hoistings*, ou então, próximo vídeo?

[11:16] Leonardo: Podemos ir para o próximo vídeo.

[11:18] Ju: Então, até daqui a pouco.

[11:21] Leonardo: Até!

