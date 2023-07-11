class Reserva {
    constructor(hospedes, quartos, dias) {
        this.hospedes = hospedes
        this.quartos = quartos
        this.dias = dias
        this.total = dias * Reserva.taxaBase
    }

    static taxaBase = 150 // atributo estático usando 'static'

    static mostrarTaxaBase() {
        console.log(`Taxa base é ${Reserva.taxaBase}`)
    }

    static get taxaPremium() {
        return Reserva.taxaBase * 1.5
    }
}

Reserva.mostrarTaxaBase()

const r1 = new Reserva(3, '201', 5)
console.log(r1)

Reserva.taxaBase = 200

const r2 = new Reserva(2, '104', 2)
console.log(r2)

console.log(`Taxa premium é $${Reserva.taxaPremium}`)