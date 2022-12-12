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

# Arrow Function

[00:00] Ju: Ainda sobre funções. Léo, funções é um assunto vasto no JavaScript. Estamos começando a raspar o  começo de função, mas, tem bastante coisa para se falar.

[00:12] Ju: Nós vamos concluir com outro, um terceiro tipo de função, uma terceira forma de escrever função. Então, antes de qualquer coisa,  antes que eu esqueça, eu vou compartilhar a minha tela. 

[00:24] Ju: Vou escrever mais códigos, vou criar um novo arquivo e  vou chamar de “arrow-function.js”. Um nome um pouco estranho, mas já  vamos entender.

[00:39] Ju: Qual é esse terceiro tipo de se escrever funções e para que ele serve?

[00:45] Ju: A *arrow* *function* é de seta, de flecha, porque essa função utiliza uma flecha na sintaxe dela. 

[00:56] Ju: Ela é uma grande novidade no ES6, e vamos escrever, vamos ver a cara dela e o Léo vai falar para nós os detalhes e para que ela  serve.

[01:06] Ju: Antes criávamos as nossas *functions*, por exemplo, uma `function apresentar`, e aí eu não preciso passar parâmetro, ou eu posso passar um nome como parâmetro `(nome)`, abro e fecho chaves, e aí, `return` uma *string*, um *template* *string*, que já vimos anteriormente, `”meu nome é”`, abre cifrão e chaves, passa a variável `${nome}` dentro dele.

[01:45] Ju: É a forma clássica e vimos expressão de função, também. Agora, *arrow* *function*. 

[01:51] Ju: Vamos supor que eu queira fazer dessa terceira forma,  seria parecida com a função de expressão. Primeiro eu crio uma `const`, eu vou chamar de `apresentarArrow` (só para sabermos o que estamos falando). A diferença é: eu coloco um igual (lembrando que criamos uma *const*, passamos um identificador, um nome para ela, um igual e atribuímos do lado direito do igual), então, o que vamos atribuir?

[02:18] Ju: Primeiro, vamos passar o parâmetro, então, temos um parâmetro para passar nessa função, que é `= nome`. Em seguida, o que vem? Vem a *arrow*, a flecha, então, vamos passar a flecha `=>`. E abro e fecho chaves? Não, não preciso passar chaves, nesse caso, para essa função, porque tudo que essa função tem que fazer é uma linha só  de código. 

[02:47] Ju: Então, como ficaria? Ficaria `const apresentarArrow = nome =>`, eu preciso passar, nesse caso, somente o que a função vai retornar, ou seja, uma *string* com a variável `${nome}`. Então, a *key* é uma função, uma *arrow* *function* clássica.

[03:07] Ju: Eu tenho só um parâmetro. Eu não tenho, nem parênteses  para fechar os parâmetros e nem chaves para fechar o bloco de código do  que a função tem que fazer.

[03:20] Ju: Eu vou só dar mais um exemplo, antes do que o Léo debulhar o que é nessa função, para que ela funcione.

[03:27] Ju: Eu vou criar mais uma *const*, vou chamar de `const soma` (vou enviar a função soma), de novo. Passamos o igual e vamos atribuir. 

[03:36] Ju: Como eu tenho dois parâmetros, nesse caso, aí sim eu  preciso abrir e fechar parênteses, senão o JavaScript fica meio perdido.

[03:47] Ju: Então, `const soma = (num1, num2)`. Entro com a flecha, a *arrow*, a seta. E preciso do `return`? Nesse caso, também não preciso do `return`, porque eu só estou passando uma instrução de uma linha. Qual é a  instrução que eu vou passar? É a mesma que já vimos anteriormente, que é só `=> num1 + num2`.

[04:12] Ju: Essa é a cara da *arrow* *function*. Léo,  fala para nós um pouco sobre as características desse jeito curioso, e  um pouco diferente, de se escrever funções no JavaScript.

[04:23] Leonardo: Essa *arrow* *function* veio junto  com o ES6, que foi o de 2015. Foi uma grande novidade, como a Ju disse, e ela deixou nosso código bem melhor. Conseguimos, agora, declarar tudo  numa linha só, não precisa de chaves, não precisa de *return*, não precisa de nada disso.

[04:42] Leonardo: Ela, também, não pode ser nomeada. Ela não tem nem  essa possibilidade para podemos usar, então, fiquem um pouco atentos com isso. E ela sempre vem com uma *const* e o nome da nossa variável, que vamos usar antes.

[04:58] Leonardo: Ela tem alguns casos especiais, Ju, que vamos ver  mais para frente, que é com objeto, com outras coisas; não é o tema  desse curso, vamos ver em outros cursos. E, eu acho que é isso, por  enquanto, que eu posso debulhar para nós da *arrow* *function*.

[05:15] Ju: Mas, Léo, não precisamos usar o *return*, ele faz tudo sozinho, mas eu tenho uma linha de código.

[05:26] Leonardo: Bom ponto, Ju. Se você tiver mais de uma linha, então, você vai precisar usar as chaves e usar o *return*. É sempre bom ter isso em mente.

[05:33] Leonardo: Você pode fazer uma dessa para nós, Ju?

[05:35] Ju: Vou fazer sim. Vou criar uma *arrow* *function* com mais de uma linha de instrução.

[05:48] Ju: Deixa eu pensar. Vamos fazer uma soma, vamos fazer um código um pouco mais extenso. Então, vou criar uma `const` e vou dizer que essa `const`, a minha função vai somar números, mas, tem que ser números pequenos; só vai somar números que sejam de 1 a 9. 

[06:02] Ju: Minha `const` eu vou chamar de `somaNumerosPequenos`, só para sabermos bem o que essa função faz. Ela vai somar 2 números,  como as outras, no caso, como são dois parâmetros, eu vou passar (abro  parênteses), `(num1, num2)`.

[06:26] Ju: E depois da minha seta (a seta é composta pelo sinal de  igual e o sinal de maior que, juntos, sem espaço. Ela forma esse sinal  de seta); cuidado na hora de fazer para não confundir o sinal de igual  com hífen, não é hífen com mais igual, é um sinal de igual seguido pelo  mais igual, que é diferente do operador (eu vou deixar marcado) de maior ou igual que, que é primeiro o maior e depois o igual. Só para não nos  confundirmos.

[07:11] Ju: Então é um operador. Quando queremos a seta, primeiro escrevemos igual e depois escrevemos maior que.

[07:18] Ju: Como uma é uma soma de números pequenos, eu não posso só  sair somando, ‘1 = 1 = 2’, eu tenho que passar uma condição para isso.  Então, meu código vai ter algumas coisas, algumas instruções a mais e  como o Léo disse, não dá para fazer isso sem retorno, sem chaves.

[07:35] Ju: Então, o começo da nossa *arrow* *function* fica igual. Criamos uma `const`, passamos parâmetros, passam a seta e abro chaves, normalmente, como nós trabalhamos com as funções que vimos anteriormente. 

[07:47] Ju: E eu posso passar os meus *ifs*, se `if (num1` ou, (o operador de ou) `|| num2 > 10)`, dou o `return` e aqui sim, precisamos do *return*, porque quando trabalhamos com condicionais ou o *if* ou o *else* vai retornar. 

[08:11] Ju: Então, ele vai, a partir do momento (lembrando o que conversamos anteriormente), o *return* é a última coisa da função, então, ele bateu no retorno ele não vê mais nada.

[08:22] Ju: Essa é uma função que tem duas possibilidades de retorno. Ou um dos dois números vai ser maior do que 10, e aí, vamos retornar `”somente números de 1 a 9”`, por exemplo. Porque queremos somar números pequenos.

[08:40] Ju: Qualquer outro caso daria para fazer outras condicionais, mas, vamos manter por essa. Aí sim, retornamos `return num1 + num2`.

[08:51] Ju: Esse é um caso bem bacana, que inclui não só *arrow* *function* com o bloco de código e com o retorno, mas, também, um caso que temos  uma função que ela pode ter mais de um retorno, dependendo da  condicional que cair. 

[09:11] Ju: Se entrar no bloco de *if*, vamos retornar uma coisa, se não, vamos retornar outra coisa.

[09:16] Ju: Certo, Léo?

[09:19] Leonardo: Exatamente. 

[09:21] Ju: Então, agora que vimos declaração de função, expressão de função e *arrow* *function*, como que sabemos quando utilizamos cada um desses três tipos?

[09:37] Leonardo: Ju, em cima disso temos: *arrow* *function* é um jeito rápido e curto de você escrever a função, então, nosso código acaba ficando mais curto e isso é uma coisa boa.

[09:49] Leonardo: Porém, se você achar que ela não é muito fácil de  entender o que está acontecendo dentro dela, você pode dar declaração de função, sem problema, para fazer isso.

[09:59] Leonardo: A *arrow* *function* também tem  algumas vantagens, quando estamos mexendo com objetos, que não vamos ver nesse curso, vamos tratar isso em outro curso. Mas, de forma geral,  podemos utilizar as três funções, só lembrando da questão do *hoisting* de quando fazemos declaração da função completa.

[10:21] Ju: Então, a *arrow* *function* se comporta nessa questão de *hoisting*, exatamente, da mesma forma que a expressão de função, não é?

[10:29] Leonardo: Exatamente.

[10:30] Ju: Então, `/Hoistinhg: arrow function` se comportam como expressão.

[10:41] Ju: Como já falamos no começo, a função vai ter muito mais  coisas para vermos na vida, inclusive, quando vocês estiverem estudando a questão de objetos, que não vamos lidar neste curso.

[10:57] Ju: Mas, existe muita coisa de função que é ligado ao estudo  de objetos, fica no seu dicionário de JavaScript mental. E, Léo, se não  tivermos mais nada para falar sobre *arrow* *function*,  neste momento, podemos subir todo esse código que fizemos de algumas  aulas para cá, para o GitHub, não é? Para ele ficar salvo.

[11:22] Leonardo: Exatamente. É sempre bom salvar o código em GitHub.

[11:26] Ju: Certo. Lembrando o processo, eu já estou no terminal, dentro da pasta certa. Como já tínhamos feito um `commit` anterior, na minha pasta “2206-fundamentos-js”, que é o nome do curso  (você pode criar o seu), nós só precisamos continuar com o processo de  três passos básicos do GitHub, que é de `commit push`. 

[11:53] Ju: Eu vou, antes, dar um comando `git status`, só para ver se todos os meus arquivos novos estão listados. Então, os  arquivos listados são os que ainda não subimos, não passamos para o  GitHub, ainda. E o próximo comando é `git add`; eu vou dar `git add .` porque o Git já se encarrega de pegar tudo que não está listado ainda, e colocar dentro da caixa do *commit*, criando para nós.

[12:22] Ju: Vou dar `git status`, de novo, para ver se foi tudo indexado. Agora sim, o GitHub enxerga como um novo arquivo, um *new file*, esses arquivos novos e estamos prontos para os dois passos finais, que é `git commit –m` (-m de mensagem), e eu vou passar como mensagem; o que eu passo como  mensagem, Léo? Sempre tenho problemas em criar mensagens para o GitHub.

[12:49] Leonardo: Podemos colocar operadores e funções.

[12:55] Ju: Operadores e funções. E o último, final, `git push origin master` e não deu nenhuma mensagem de erro. E eu, sem querer, apaguei a mensagem.

[13:16] Leonardo: Ju, agora já subiu tudo. Não temos mais nada para falar de função, por enquanto, certo?

[13:22] Ju: Certo.

[13:23] Leonardo: Então, nos vemos no próximo vídeo.

[13:25] Ju: Até lá!

# Estrutura do `if`

Durante o curso, fizemos uso de uma estrutura chamada de **condicional** para definir o fluxo dos nossos programas. As estruturas condicionais  são essenciais para a programação, pois permitem que um programa execute este ou aquele bloco de código de acordo com uma *condição*, por exemplo: “**Se** o e-mail e a senha estiverem corretos, o usuário poderá acessar o sistema. **Senão** ele deve receber um aviso de credenciais de acesso incorretas”. Uma  condição exclui automaticamente a outra, pois ou ambas as credenciais  (e-mail e senha) estarão corretas, ou não.

> As estruturas condicionais permitem que o código se ramifique e tome “caminhos” diferentes de acordo com a condição fornecida.

Abaixo, vamos relembrar a estrutura condicional `if`e suas variações:

## `if`

A principal estrutura condicional é `if`, que podemos traduzir literalmente como “se”:

```scss
if (condicao) {
 // código a ser executado
}
```

A `condicao` é sempre uma expressão que deverá ser avaliada e retornar `true` ou `false` (ou seus equivalentes “truthy” ou “falsy”). O bloco de código dentro do `if` só será executado caso a expressão retorne `true` ou um valor “truthy”. Por exemplo:

```javascript
const num = 10;

if (num === null) {
 console.log('número não fornecido');
}
```

No exemplo acima, a instrução `console.log(‘número não fornecido’);` não será executada, pois como a variável `num` foi definida com um valor de `10`, o resultado da comparação `num === null` retornará `false`. Ou seja, o interpretador não vai, como dizemos, “entrar no if” e executar o código.

Vejamos um outro exemplo:

```javascript
const num = 10;

if (num !== null) {
 console.log(`o número é ${num}`);
}
```

Neste novo exemplo, o código dentro do bloco `if` será executado normalmente, pois **o resultado da expressão `num !== null` (ou seja, “o valor da variável num é diferente de null”) retorna `true`**.

A expressão acima também poderia ser escrita da seguinte forma:

```javascript
if (num) {
 console.log(`o número é ${num}`);
}
```

Com o mesmo resultado.

Uma vez que `null` é um valor que podemos atribuir a uma variável, a seguinte estrutura também seria possível:

```javascript
const num = null;

if (num === null) {
 console.log('número não fornecido');
}
```

O código acima também pode ser escrito da seguinte forma, pois `null` é considerado um valor “falsy”:

```javascript
if (!num) {
 console.log('número não fornecido');
}
```

### Múltiplas condições

É possível usar os operadores AND (`&&`) ou OR (`||`) para executar o código no `if` caso uma das condições for verdadeira, ou as duas:

```javascript
const num = 11;

if (num > 10 || !num) {
 console.log('número não válido');
}
```

O console exibe a mensagem corretamente, pois uma das condições foi atendida e retornou `true` (`num > 10`). Usamos o operador lógico `||`, *or* (ou *ou* em português) para especificar que a condição do `if` será validada se apenas uma das condições for verdadeira, mas não necessariamente todas.

Também é possível usar o operador lógico `&&` (*and* ou *e* em português) para especificar que a condição do `if` será validada apenas se todas as condições retornarem true:

```javascript
const num = 11;

if (num > 10 && num < 20) {
 console.log('número válido');
}
```

O console acima é executado normalmente, pois o número `11` atende ambas as condições especificadas no `if`: `num` ser maior do que `10` e/*and*/`&&` ser menor do que `20`.

## `if…else`

Outra forma de condicional muito utilizada é adicionar a cláusula `else` para ser executada quando a condição do `if` retorna `false`. Podemos ler `if…else` como “se… senão”, como por exemplo “**se** uma dada condição for verdadeira (`true`) execute um determinado código; **senão**, execute outro código”.

```javascript
function verificaNumero(numero) {

 if (numero > 10) {
   return 'número maior que 10';
 } else {
   return 'número não é maior que 10';
 }
 }

console.log(verificaNumero(9)) //número não é maior que 10
```

No exemplo acima, a comparação `numero > 10` retorna false, pois a função foi executada tendo `9` como argumento para `num`. Assim, o bloco de código dentro do `if` é ignorado e o interpretador vai direto para o bloco dentro do `else`. 

> Veja que `else` não leva nenhuma condição entre parênteses, pois é executada automaticamente caso a condição do `if` retorne `false` ou um valor “falsy”. 

## `else if`

A condicional `if…else` vai executar um bloco de código entre duas possibilidades, dependendo do resultado da expressão que é passada como condição do `if`. Porém, em alguns casos é necessário mais de duas opções de fluxo para o código; para estes casos existe a cláusula `else if`: 

```javascript
const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}
```

> Veja que a cláusula `else if` também precisa receber a condição (ou as condições) como parâmetros, ao contrário do `else`, que deve fechar a cadeia de condicionais e continua sem receber nenhum  parâmetro, pois é o código que será executado caso todas as outras  condições anteriores falhem.

> **IMPORTANTE**: Ao trabalhar com múltiplas condições e `else if`, lembre-se sempre que cada condição e cada bloco (`if`, `else if` e `else`) deve representar condições excludentes entre si! Ou seja, não pode  haver ambiguidade entre as condições - uma mesma condição válida tanto  no `if` quanto no `else if`, por exemplo.

Faça o teste com diversos valores e confira os resultados!

# Para saber mais: Git e GitHub

O [Git](https://git-scm.com/) é o que chamamos de **sistema de versionamento (ou controle) de código**. Existem outros, porém ele se tornou o mais utilizado no mundo todo.

O [GitHub](https://github.com/) é uma plataforma que utiliza a tecnologia Git para que qualquer pessoa  cadastrada possa salvar, atualizar e acessar seus códigos ou os códigos  de seu grupo de trabalho ou empresa.

Neste curso não vamos abordar o Git ou como ele funciona. Caso você  precise relembrar como ele funciona, pode consultar os seguintes  materiais de referência:

- O [curso da Alura de GitHub e controle de versão](https://cursos.alura.com.br/course/git-github-controle-de-versao) que faz parte da formação [Iniciante em Programação](https://cursos.alura.com.br/formacao-programacao);
- Esta [live do YouTube](https://www.youtube.com/watch?v=nec3n02idMw&ab_channel=AluraCursosOnline) sobre a ferramenta, com várias informações bacanas sobre como ela funciona;
- A [websérie no Youtube Git e GitHub Para Sobrevivência](https://www.youtube.com/watch?v=BAmvmaKQklQ&t=9s&ab_channel=AluraCursosOnline) que vai desde o conteúdo básico até o mais avançado!

# Faça como eu fiz: Separando código em funções

Agora que já sabemos como declarar funções com partes específicas de  códigos e executá-las no momento certo, você pode voltar ao que já  fizemos nas aulas anteriores e reescrever - ou **refatorar** - para que cada parte esteja separada em sua função.

Um exemplo que podemos aplicar com as variáveis de soma que criamos no início do curso:

```cpp
const num1 = 5;
const num2 = 5;
const resultado = num1 + num2;
```

O código acima pode ser refatorado como função, recebendo os números como argumentos para que a função possa ser executada com qualquer valor:

```javascript
function soma(num1, num2) {
 return num1 + num2;
}

console.log(soma(5, 5))
```

Pratique bastante e, se precisar, peça ajuda nas nossas comunidades!

# Projeto final do curso

Você pode [baixar o zip](https://github.com/alura-cursos/2206-fundamentos-js/archive/refs/heads/master.zip) ou acessar o link do repositório no [GitHub](https://github.com/alura-cursos/2206-fundamentos-js)!

# O que aprendemos?

## Nesta aula vimos:

- O que são funções, pequenos trechos de código que podem ser executados uma ou mais vezes.
- As vantagens de se usar uma função, pois com elas conseguimos deixar o  código mais curto e mais legível, facilitando a manutenção.
- Como retornar informações da função, utilizando o `return`, lembrando que o `console.log()` apenas mostra a informação no terminal e não para outras partes do código.
- A utilidade dos argumentos, já que com eles podemos passar variáveis para as funções poderem usar os valores.
- Que com o *hoisting* o JavaScript analisa todo o código procurando por variáveis declaradas com `var` e funções para trazer tais declarações para o início do código.
- Expressões de função, uma maneira diferente de montar funções usando variáveis do  tipo const e chamando-as pelo nome. Lembrando que é necessário que o  programa passe pela variável antes de podermos chamá-la, já que não há  suporte à *hoisting*.
- *Arrow function*, uma função declarada de maneira mais compacta usando uma const. A *arrow function* também não tem suporte à *hoisting*.

# Parabéns

# Chegou o momento de celebrar sua grande conquista!

![ilustração de uma mão segurando um troféu de ouro](https://s3.amazonaws.com/caelum-online-public/alurastart-555-pong/aula5/troufeu.png)

Neste treinamento, todas as barreiras foram vencidas e você aprofundou ainda mais seus conhecimentos em JavaScript.

Você aprendeu o que são tipos primitivos na prática. Além disso,  entendeu a principal questão das entrevistas de emprego em JavaScript,  que é a diferença entre `var`, `let` e `const`. Também viu os principais fundamentos do JS, como declaração de variáveis, funções, operadores lógicos, *arrow function* e claro, Git e GitHub. 

Nossa, quanta coisa legal!

Mostre os trechos de código desenvolvidos para outras pessoas e marque a Alura nas redes sociais com a hashtag #AluraJS.

> Agora, dê uma nota para o curso, pegue seu certificado e comemore bastante essa conquista. 

# Conclusão

[00:00] Ju: Chegamos ao final desse curso de Fundamentos de JavaScript. Esperamos que tenham gostado. 

[00:05] Ju: Nós apresentamos esses fundamentos das partes principais e mais básicas de qualquer linguagem de programação, ou qualquer  linguagem mais comercial que trabalhamos hoje, mas, com algumas das  particularidades do JavaScript.

[00:20] Ju: Léo, o que mostramos para o pessoal nesse curso? Vamos dar uma repassada.

[00:27] Leonardo: Começamos trabalhando com tipos, então, tipo *number*, tipo *string*, tipo *booleana*. Ju, você pode nos mostrar o código? Compartilhar a tela para vermos em código e falar, ao mesmo tempo, para ficar legal?

[00:39] Ju: Nós vimos tipos *booleanos*, *true* ou *false*. O que mais? Tipo *number*

[00:45] Leonardo: Tipo *number* e o tipo *string*.

[00:48] Leonardo: Depois, trabalhamos com as variáveis, com a var, *let*, const. Vimos a diferença entre elas, que são essenciais para podermos trabalhar; isso é uma característica do JavaScript.

[01:05] Leonardo: Também vimos a diferença entre o NodeJS e o  JavaScript, que o Node é o interpretador e o JavaScript é a linguagem,  então, eles são duas coisas diferentes.

[01:16] Leonardo: Vimos também sobre operadores.

[01:19] Ju: Operadores, por exemplo, ternário.

[01:25] Leonardo: Por exemplo, operador ternário. E, por fim,  passamos nas funções, onde descrevemos diversos tipos diferentes.  Inclusive, *aero* *function*, algumas coisas são exclusivas do JavaScript.

[01:43] Ju: Sim. O JavaScript tem umas particularidades do *hoisting*, de mandar os códigos para cima, então, tudo isso precisamos ver desde o começo, para garantirmos de entender essas partes principais. 

[01:55] Ju: A intenção é que você estude cada uma dessas partes com  bastante cuidado, para que esses conceitos, por trás do que vimos no  curso, sejam absorvidos. Então, quando você for aprender mais conteúdos, for acrescentando mais coisas do JavaScript, tudo que vimos já está bem fresco na cabeça e bem mais completo do que, simplesmente, sair  digitando o *let* e a coisa funcionar. Não é nossa intenção no curso.

[02:22] Ju: Isso vai te ajudar a entender comportamentos da linguagem, *bugs* e coisas que acontecem e porquê o JavaScript se comporta de determinadas maneiras.

[02:32] Ju: Por enquanto, é só. Obrigada por ter nos acompanhado até aqui. Léo, vamos dar um tchau?

[02:40] Leonardo: Podemos dar um tchau, agora, para todo mundo. Obrigada por terem participado desse curso    .

[02:46] Ju: E até o próximo curso.

[02:48] Leonardo: Até!

