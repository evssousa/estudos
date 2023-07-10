class Veiculo {
    mover() {
        console.log(`O veículo está se movendo.`)
    }
}

class Carro extends Veiculo {
    mover() {
        console.log(`O carro está se movendo.`)
    }
}

class Navio extends Veiculo {
    mover() {
        console.log(`O naviu está navegando.`)
    }
}

class Aviao extends Veiculo {
    mover() {
        console.log(`O avião está voando a ${velocidade()} km/h`)
    }
}

const delorean = new Carro()
const blackPearl = new Navio()
const epoch = new Aviao()

// delorean.mover()
// blackPearl.mover()
// epoch.mover(80)

// ===============

function iniciar(veiculo) {
    console.log('Iniciando um veículo...')
    veiculo.mover()
}

iniciar(delorean)
iniciar(blackPearl)
iniciar(epoch)