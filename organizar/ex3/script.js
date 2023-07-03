const vei1 = prompt('Digite o nome do primeiro veículo:')
const vei1Calc = prompt('Qual a velocidade deste veículo?')

const vei2 = prompt('Digite o nome do segundo veículo:')
const vei2Calc = prompt('Qual a velocidade deste veículo?')

if (vei1Calc > vei2Calc) {
    alert(`O veículo ${vei1} é mais rápido que o veículo ${vei2}`)
} else if (vei2Calc > vei1Calc) {
    alert(`O veículo ${vei2} é mais rápido que o veículo ${vei1}`)
} else {
    alert(`Os dois veículos tem a mesma velocidade`)
}