let dinheiroInicial = prompt('Qual a quantidade inicial de dinheiro que você tem disponível?')
dinheiroInicial = parseFloat(dinheiroInicial)

let opcao = ''

do {
    opcao = prompt(
        `Você tem disponível: R$${dinheiroInicial}
        O que deseja fazer?
        1. Adicionar
        2. Remover
        3. Sair
    `)

    switch (opcao) {
        case '1':
            const adicionar = parseFloat(prompt(`Quanto você deseja adicionar?`))
            dinheiroInicial += adicionar
            alert(`Foi adicionado a sua carteira, R$${adicionar}`)
        case '2':
            const remover = parseFloat(prompt(`Quanto você deseja remover?`))
            dinheiroInicial -= remover
            alert(`Foi removido da sua carteira, R$${remover}`)
        case '3':
            alert('Saindo do programa...')
            break
        default:
            alert('Opção inválida!')
            break
    }
} while (opcao !== '3')