//var - sem regras, não precisa declarar, podendo trazer problemas
/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;*/

//Solução, o uso da let
/*let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area);*/
//const sempre precisa com um valor, e o calor não muda.

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area);