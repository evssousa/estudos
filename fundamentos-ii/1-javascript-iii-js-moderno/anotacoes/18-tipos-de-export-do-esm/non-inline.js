function grupo() {
    console.log('Export nomeado não-inline (agrupado)')
}

function exportDefault() {
    console.log('Export default não-inline')
}

// pode exportar separadamente, do mesmo jeito do inline.
export { grupo }

export default exportDefault