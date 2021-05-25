"use strict";
// let & const 
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '1234567890';
console.log(cpf);
var segredo = "externo!";
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Ola' + pessoa);
falarCom('Joao');
// this
// function normalComThis(){
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
// normalComThisEspecial()
// const arrowComThis = () => console.log(this)
// arrowComThis()
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4);
console.log(numeros);
console.log(retornarArray(...numbers));
//Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`1) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto) 
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
const usuarioId = 'SuporteCod3r';
const notificacoes = '19';
// const boasvindas = 'Boas vindas' + usuarioId + 'Notificações' + notificacoes
const boasvindas = `
Boas vindas ${usuarioId}, 
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasvindas);
console.log(`Motor: ${caracteristicas[0]}`);
// Desafio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Desafio 2
const dizerOla = (nome = 'Pessao') => console.log("Ola, " + nome);
dizerOla();
dizerOla("Anna");
// Desafio 3 
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Desafio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// Desafio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Callback
// function esperar3seg(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3s depois')
//     }, 3000)
// }
// esperar3seg(function (resultado: string) {
//     console.log(resultado)
// })
// function esperar3segPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s depois promise')
//         }, 3000)
//     })
// }
// esperar3segPromise()
//     .then(dado => console.log(dado))
// fetch('https://sswapi.dev/api/people/1/')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(err => console.log('Catch!!!' + err))
//# sourceMappingURL=ecmascript.js.map