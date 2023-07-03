// export nomeado por que precisa passar o nome exato dele.
// caso precise mudar o nome, pode usar 'inline as i'.
// import { inline } from './inline.js'
export function inline() {
    console.log('Export nomeado inline')
}

// define um export padrão de um arquivo. Pode-se mudar o nome 'defaultInline' para qualquer nome.
// import defaultInline from './inline.js'
// export default só pode ter um.
export default function defaultInline() {
    console.log('Export default inline')
}