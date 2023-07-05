/*
User, que deverá possuir:
- um atributo fullname, atribuível na instanciação
- um atributo email, atribuível na instanciação
- um atributo password, atribuível na instanciação
- um método login, que tem como parâmetro um email e uma senha, e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
*/

class Usuario {
    constructor(nomeCompleto, email, senha) {
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.senha = senha
    }

    login(email, senha) {
        if (this.email === email && this.senha === senha) {
            console.log('Login efetuado!, seja bem-vindo ' + this.nomeCompleto)
        } else {
            console.log('Email ou Senha incorretos')
        }
    }
}

const everson = new Usuario('Everson Sousa', 'admin@admin', 'admin')

// aqui será onde o usuário está tentando fazer o login
everson.login('admin@admin', 'admin')