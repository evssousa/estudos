/*
- Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
- Utiliza dois pontos de interrogação "??".
- Vale destacar que ele é diferente do operador lógico OU ("||"), que dá curto-circuito em expressões falsy (por exemplo, o número 0).
- Pode ser usado para operações lógicas e também para atribuições de valores padrão através de short-circuit evaluation (avaliação de curto-circuito).
*/

// Exemplo:
let a = 0
let c = a || 42     // c será 42
c = a ?? 42         // c será 0, pois 0 é falsy, mas não nullish
c = null ?? 42      // c será 42

// ===============================================
// Outros exemplos:
// ===============================================

const a = 0                 // false
const b = null              // false
const c = 'Teste'           // true

// Toda vez que o valor for false, ele pula para o próximo até achar um true
console.log(a || b || c)    // Teste

// Pula para o próximo caso o valor seja null ou undefined.
console.log(a ?? b ?? c)    // 0