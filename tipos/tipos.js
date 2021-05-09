"use strict";
// string
var nome = 'João';
console.log(nome);
// numbers
var idade = 27;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)
// array 
var hobbies = ['Cozinhar', 'Praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 10
console.log(hobbies);
// tuplas
var endereco = ["Av. Principal", 99];
console.log(endereco);
endereco = ["Rua Importante", 120];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 104] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Verde);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Azul, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
// tipo função 
// const teste = function (a: number, b: number): boolean {
//     return false
// }
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos 
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = { 
//     name: 'Maria', 
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
var funcionario = {
    supervisores: ['Ester', 'Leonam'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto normal';
        return 'Fora do horário!';
    }
};
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto normal';
        return 'Fora do horário!';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// Checando tipos
var valor = 30;
if (typeof valor === 'number') {
    console.log(" é um number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Teste',
    preco: 3,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '931231',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null;
// podeSerNulo = 12
console.log(podeSerNulo);
// podeSerNulo = 'abc'
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
console.log(contaBancaria);
