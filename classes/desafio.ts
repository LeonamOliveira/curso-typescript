// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

class Moto {
    constructor(public nome: string, private _velocidade: number = 0) { }

    public buzinar(): void {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number): number {
        return this._velocidade = this._velocidade + delta
    }

    public velocidade(): number {
        return this._velocidade
    }
}

const moto = new Moto("Ducati")
moto.buzinar()
console.log(moto.velocidade())
moto.acelerar(30)
console.log(moto.velocidade())

// Exercício 2 - Herança
abstract class objeto2D {
    constructor(public base: number = 0, public altura: number = 0) { }

    abstract area(): number
}

class Retangulo extends objeto2D { 
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ""

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ""
        }
    }
}

const estagiario = new Estagiario
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

// var estagiario = {
//     _primeiroNome: ''
// }

// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })

