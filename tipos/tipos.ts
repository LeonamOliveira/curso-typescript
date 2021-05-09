// string
let nome: string = 'João'
console.log(nome)

// numbers
let idade: number = 27
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)

// array 
let hobbies: any[] = ['Cozinhar', 'Praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
// hobbies = 10
console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av. Principal", 99]
console.log(endereco)

endereco = ["Rua Importante", 120]
console.log(endereco)

// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul,
    Laranja,
    Amarelo,
    Vermelho,
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Verde)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Azul, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 3))

// tipo função 

// const teste = function (a: number, b: number): boolean {
//     return false
// }

let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objetos 
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = { 
//     name: 'Maria', 
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}

console.log(usuario)

// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) e retorna uma string
            -> Ponto normal ( <=8 )
            -> Fora do horário ( > 8 )
*/

// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ester', 'Leonam'],
    baterPonto(horario: number): string {
        if (horario <= 8) return 'Ponto normal'
        return 'Fora do horário!'
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if (horario <= 8) return 'Ponto normal'
        return 'Fora do horário!'
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30
if (typeof valor === 'number') {
    console.log(" é um number")
} else {
    console.log(typeof valor)
}

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Teste',
    preco: 3,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome!')
        }
        if (this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '931231',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo: null = null
// podeSerNulo = 12
console.log(podeSerNulo)
// podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
console.log(contaBancaria)