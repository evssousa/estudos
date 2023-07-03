let opcao = ''

do {
    opcao = prompt(`Escolha um opção abaixo:
    1. Opção 1
    2. Opção 2
    3. Opção 3
    4. Sair`)

    switch (opcao) {
        case '1':
            alert('Você selecionou a opção 1')
            break
        case '2':
            alert('Você selecionou a opção 2')
            break
        case '3':
            alert('Você selecionou a opção 3')
            break
        case '4':
            alert('Saindo do programa')
            break
        default:
            alert('Opção inválida')
    }
} while (opcao !== '4')