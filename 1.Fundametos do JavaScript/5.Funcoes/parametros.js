function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multipliacacao(numero1 = 1, numero2 = 1){ // setar um padrão, caso é recebido, o padrão e subtituido
    return numero1 * numero2;
}

console.log(multipliacacao(soma(4,5), soma(3, 3)))