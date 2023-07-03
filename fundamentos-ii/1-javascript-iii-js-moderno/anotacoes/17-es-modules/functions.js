// export antes do function é uma palavra reservada para exportar aquela função ou variável.

export function label(atributos) {
    const elemento = document.createElement('label')
    Object.assign(elemento, atributos)
    return elemento
}

export function input(atributos) {
    const elemento = document.createElement('input')
    Object.assign(elemento, atributos)
    return elemento
}

export function br() {
    const elemento = document.createElement('br')
    return elemento
}