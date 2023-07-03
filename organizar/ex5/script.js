const metros = prompt('Digite um valor em metros:')

const opcao = prompt(`Para qual unidade de medida deseja converter ${metros}metros?
1 - mílimetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)

Digite a opção escolhida:`)

switch(opcao) {
    case '1':
        alert(`${metros}m em mílimetros é ${metros * 1000}mm.`)
        break
    case '2':
        alert(`${metros}m em centímetros é ${metros * 100}cm.`)
        break
    case '3':
        alert(`${metros}m em decímetros é ${metros * 10}dm.`)
        break
    case '4':
        alert(`${metros}m em decâmetros é ${metros / 10}dam.`)
        break
    case '5':
        alert(`${metros}m em hectômetros é ${metros / 100}hm.`)
        break
    case '6':
        alert(`${metros}m em quilômetros é ${metros / 1000}km.`)
        break
    default:
        alert('Opção inválida')
}