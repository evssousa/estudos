const ent1 = prompt('Informe o primeiro número:')
const ent2 = prompt('Informe o segundo número:')

const a = parseFloat(ent1)
const b = parseFloat(ent2)

alert(`
    Os números escolhidos foram: ${a} e ${b}
    A soma entre eles é ${a + b}
    A subtração entre eles é ${a - b}
    A multiplicação entre eles é ${a * b}
    E a divisão entre eles é ${a / b}
`)