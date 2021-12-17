### **Para saber mais: Conversão de valores**

Já aprendemos os tipos de variáveis que podemos utilizar, entre os quais temos os números, os textos e os booleanos. Porém, como podemos utilizar o valor de uma variável numérica em um texto, ou utilizar uma string que contenha apenas números para fazer contas?

Para estes casos, no JavaScript vamos utilizar `Number()` e `String()`, que vão nos permitir converter os dados para números ou textos.

## String()

Vamos fazer alguns exemplos de conversão de números e booleanos através de `String()`:

```
let telefone = 12341234;
console.log(“O telefone é ” + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as stringsCOPIAR CÓDIGO
```

Outra opção para transformarmos um valor em String é usar o `toString()`:

```
let telefone = 12341234;
console.log(“O telefone é ” + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.COPIAR CÓDIGO
let usuarioConectado= false;
console.log (String( usuarioConectado ) ); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado= true;
console.log (String( usuarioConectado ) ); // agora teremos uma string “true”.COPIAR CÓDIGO
```

## Number()

Vamos fazer alguns exemplos de conversão de textos e booleanos através de `Number()`:

```
// Vamos calcular a área de um retângulo
let largura = “10”;
let altura = “5”;
console.log( Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicaçãoCOPIAR CÓDIGO
```

Podemos usar o operador de soma **+** para fazer a conversão de textos para números, colocando-os antes das variáveis:

```
let largura = “10”;
let altura = “5”;
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveisCOPIAR CÓDIGO
let meuNome = “leonardo”;
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaNCOPIAR CÓDIGO
let usuarioConectado= false;
console.log (Number( usuarioConectado ) ); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log (Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.COPIAR CÓDIGO
```

> Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.



### **Para saber mais: Palavras reservadas**

Já aprendemos a declarar variáveis, sejam elas `let` ou `const`, utilizando a palavra-chave e um nome que escolhemos para a variável. Chamamos este nome justamente de **identificador**, e o ideal é que sejam sempre o mais explicativos possível:

```
let cpfUsuario = "12312312312"COPIAR CÓDIGO
```

Mas o que acontece se tentarmos identificar uma variável com um termo que faça parte da linguagem, como nos casos abaixo?

```
let var = 0;
let if = 0;
let const = "Alura";COPIAR CÓDIGO
```

Faça o teste para ver que o JavaScript não consegue reconhecer estas palavras-chave como identificadores e nem interpretar o que deve ser executado nestas linhas. Isso acontece porque `var`, `if` e `const` são **palavras reservadas** do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.

Por outro lado, os exemplos abaixo são aceitáveis:

```
let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";COPIAR CÓDIGO
```

No JavaScript, algumas palavras são totalmente reservadas (não podem ser utilizadas como identificador em nenhum caso), enquanto outras podem ser utilizadas dependendo do contexto, e ainda outras não podem ser consideradas totalmente reservadas por razões de compatibilidade com versões mais antigas da linguagem, como é o caso de `let` (lembrando que, até o ES6, só era possível declarar variáveis com `var` e `let`, que vem do verbo em inglês “permitir”).

A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. **As únicas exceções são `from`, `set` e `target`, que são seguras e comumente utilizadas.**

```
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yieldCOPIAR CÓDIGO
```

Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:

```
enum
implements
interface
package
private
protected
publicCOPIAR CÓDIGO
```

> Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais **semântica** possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.

Variáveis declaradas com `var` ou `let` podem ser reatribuídas. Porém, uma variável declarada com `let` só pode ser usada no mesmo escopo em que está definida. No caso da declaração `const`, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.

#### Resumo:

## Nesta aula vimos que:

- `var` tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
- `let` e `const` têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e `const` não pode ter seu valor alterado depois de definido.
- O JavaScript considera alguns valores como *false* durante comparações, como com null, undefined, 0, NaN e Strings vazias.
- null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como *undefined* (não definido).
- null é um objeto no JavaScript, diferente de *undefined*, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
- O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
- Temos como forçar uma mudança de tipo utilizando os métodos `Number()` e `String()`, onde `Number()` converte as variáveis para números ou NaN caso tenha algum erro na conversão, e `String()` converte as variáveis para texto.