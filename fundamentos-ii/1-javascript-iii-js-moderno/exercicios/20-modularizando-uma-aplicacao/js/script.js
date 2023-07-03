/*
Para esse exercício você irá utilizar o código do projeto Calc.js, desenvolvido nas aulas Projeto Prático Guiado no módulo anterior, Javascript II - DOM. Você deverá modularizar o código javascript da aplicação, dividindo o conteúdo do arquivo script.js em diferentes módulos utilizando a sintaxe dos ES Modules. Seu projeto deve conter pelo menos 3 módulos.
*/

import { calculate } from './calculate.js'
import { clearButton, handleButtonPress, handleTyping } from './charkey.js'
import copyToClipboard from './copyToClipboard.js'
import themeSwitcher from './themeSwitcher.js'

// Evento de clique de cada um dos botões
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

// Evento do botão apagar
document.getElementById("clear").addEventListener("click", clearButton)

// Evento quando digita no teclado
document.getElementById("input").addEventListener("keydown", handleTyping)

document.getElementById("equal").addEventListener("click", calculate)

// Evento de copiar para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

// Evento do claro e escuro
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)