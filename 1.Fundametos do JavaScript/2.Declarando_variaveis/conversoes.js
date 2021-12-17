//tipo de dado
//booleanos

//conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);//tipo e o valor
console.log(numero == numeroString);//somente valor



console.log(numero + numeroString);//concatena por causa da string

//conversão explícita

//Number()
//String()
console.log(numero + Number(numeroString));