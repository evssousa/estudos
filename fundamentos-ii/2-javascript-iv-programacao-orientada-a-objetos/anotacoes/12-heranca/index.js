console.log('\n')
// ==================================================================================
class Imovel {
    constructor(area, preco) {
        this.area = area
        this.preco = preco
    }

    obterPrecoPorMetroQuadrado() {
        return this.preco / this.area
    }
}

class Casa extends Imovel {
    
}

const terreno = new Imovel(200, 50000)
const casa = new Casa(120, 200000)

console.log(terreno)
console.log(casa)
console.log(casa instanceof Imovel)

class Apartamento extends Imovel {
    constructor(numero, area, preco) {
        super(area, preco)
        this.numero = numero
    }

    obterAndar() {
        return this.numero.slice(0, -2)
    }
}

const apt = new Apartamento("201", 100, 160000)
console.log(apt)
console.log(`Andar: ${apt.obterAndar()}`)

// ==================================================================================
console.log('\n')