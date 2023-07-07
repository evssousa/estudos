console.log('\n')
// ==================================================================================
class Conta {
    #senha
    #saldo = 0

    constructor(usuario) {
        this.email = usuario.email
        this.#senha = usuario.senha
    }

    verSaldo(email, senha) {
        if (this.#autenticador(email, senha)) {
            return this.#saldo
        } else {
            return null
        }
    }

    #autenticador(email, senha) {
        return this.email === email && this.#senha === senha
    }
}

const usuario = {
    email: 'evs.link@hotmail.com',
    senha: '12345'
}

const minhaConta = new Conta(usuario)
console.log(minhaConta)

console.log(minhaConta.verSaldo('evs.link@hotmail.com', '12345'))

// ==================================================================================
console.log('\n')