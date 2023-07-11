class Wallet {
    #quantidade
    #username

    constructor() {
        this.#quantidade = 100.99 * 100 //10099
    }

    // ===========
    get quantidade() {
        return this.#quantidade / 100
    }

    // ===========
    set username(novoUsername) {
        if (typeof novoUsername === 'string') {
            return this.#username = novoUsername
        } else {
            console.log('O username deve ser do tipo string')
        }
        
    }
    get username() {
        return this.#username
    }
}

// get
const minhaWallet = new Wallet()
console.log(minhaWallet.quantidade)

// set
minhaWallet.username = 'Everson'
console.log(minhaWallet.username)