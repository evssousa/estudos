/**
 * JSON, ou JavaScript Object Notation, é um formato de arquivo utilizado para troca de dados.
 * 
 * É um formato compacto, representado em texto, de padrão aberto e que trabalha utilizando o sistema de chave-valor.
 * 
 * Como o próprio nome diz, ele utiliza a mesma notação, ou seja, forma de se escrever o conteúdo, dos objetos do javascript (com alguns mínimos detalhes diferentes).
 * - " " para nomear as chaves;
 * - Tipos primitivos suportados para valores (string, number, boolean e null);
 * - { } para definir grupos de propriedades (objetos);
 * - [ ] para definir lista de dados (arrays);
 * - , para separar as propriedades;
 * 
 * É muito utilizado para troca de dados entre diferentes sistemas e em arquivos de configuração do javascript.
 * 
 * É amplamente utilizado na web e é suportado por várias linguagens além do javascript.
 */

// Exemplos:
{
    // 'nome': 'Everson Sousa',
    // 'cargo': 'Professor EMI',
    // 'tecnologias': ['HTML', 'CSS', 'Javascript', 'Python', 'SQL'],
    // 'trabalhando': true,
    // 'anosDeExperiencia': 1,
    // 'website': null
}
// OBS: código comentado devido ao vscode reconher alguns erros não identificados.

// Manipulando arquivos JSON no Javascript:
JSON.parse() // converte uma string para objeto json-compatible
JSON.stringify() // converte um objeto json-compatible para string

// ==============================================
// Caso de uso:
// ==============================================
const str = `{
    'nome': 'Everson Sousa',
    'cargo': 'Professor EMI',
    'tecnologias': ['HTML', 'CSS', 'Javascript', 'Python', 'SQL'],
    'trabalhando': true,
    'anosDeExperiencia': 1,
    'website': null  
}`
const obj = JSON.parse(str) 
console.log(obj)
// irá mostrar o obj conforme ele é, aparecendo as chaves, arrays, etc.

const objStr = JSON.stringify(obj)
console.log(objStr)
// irá mostrar o json em formato de string, conforme mostrado na linha 35~42.