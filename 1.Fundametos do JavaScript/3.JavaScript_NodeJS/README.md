### **Para saber mais: Tipos de erro**



Enquanto trabalhamos com programação, passamos uma boa parte do tempo lidando com os erros que aparecem em nosso código. Isso é totalmente normal, pois eles nos ajudam a resolver problemas. Já imaginou como seria muito mais difícil programar sem um recurso para dizer onde estamos errando e como corrigir?

Como vimos, as pessoas que desenvolvem os programas e linguagens são as responsáveis pelo chamado “tratamento de erros”, ou seja, permitir a comunicação de quais foram os problemas, e nem sempre isso acontece da melhor forma - embora já tenha melhorado muito nas últimas décadas.

Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:

- `RangeError`: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe `-1`.
- `ReferenceError`: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.
- `SyntaxError`: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.
- `TypeError`: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

O NodeJS trabalha com outros tipos específicos de erro que não vamos abordar neste momento, mas que você pode sempre consultar na [documentação oficial](https://nodejs.org/api/errors.html#errors_errors).

> Além do tipo de erro, o terminal também vai dar outras informações, como o nome do arquivo e linha onde foi detectado o erro. Muitas vezes isso já basta para identificar e corrigir, mas existem também casos onde o erro não é detectado pelo JavaScript na linha onde o código é declarado, por exemplo, mas onde ele é executado. Por isso é importante praticar sempre a leitura dos erros e da *stacktrace* e nunca pular esta etapa.

No futuro, ao trabalhar em suas aplicações, você também deverá criar seus próprios avisos de erro para ajudar os usuários.

### **Para saber mais: Outros métodos da Console API**

Embora seja o mais utilizado, `.log()` é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra *log* significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

Entre os outros métodos, existem:

- `console.error()` para exibir mensagens de erro;
- `console.table()` para visualizar de forma mais organizada informações tabulares;
- `console.time()` e `console.timeEnd()` para temporizar período que uma operação de código leva para ser iniciada e concluída;
- `console.trace()` para exibir a *stacktrace* de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

A [documentação oficial do NodeJS](https://nodejs.org/api/console.html) dá exemplos sobre como utilizar cada um destes métodos e mais outros da lista. É uma documentação bastante extensa, mas não se preocupe! Você não precisa decorar a lista completa, já que ela está sempre disponível para consulta. Para a maior parte dos casos de exemplo, vamos continuar usando `console.log()`.

### **Faça como eu fiz: Usando o console.error()**

Se você já tiver feito algum teste de `console.log()` utilizando o navegador, possivelmente já viu os métodos `console.error()` e `console.warn()` em ação, pois nos navegadores esses métodos são identificados com as cores vermelho e amarelo e emojis.

Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método `console.error()`.

Crie um arquivo `.js` em seu computador, escreva o seguinte código:

```
console.log("deu erro");
console.error("deu erro");COPIAR CÓDIGO
```

Se executarmos este código com `node script.js` (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é o mesmo para os dois comandos:

```
deu erro
deu erroCOPIAR CÓDIGO
```

Então não faz diferença usar um ou outro?

Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.

Vamos tentar novamente, passando uma informação um pouco diferente para `console.error()`:

```
console.log("deu erro");
console.error(new Error("deu erro"));COPIAR CÓDIGO
```

Se executarmos este código, o resultado agora é diferente:

```
deu erro
Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47COPIAR CÓDIGO
```

O que vimos acima - a palavra-chave `new` seguida de `Error` com inicial maiúscula - é um gostinho de como trabalhamos com **classes** em JavaScript.

### **O que aprendemos?**

## Nesta aula vimos:

- As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
- O que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
- Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
- O que é *stacktrace*, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
- O que é o Console API e como podemos utilizá-lo usando o `console.log()` e `console.error()`.
- Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal