/**
 * O que é webpack?
 * - Empacotador de módulo estático
 * - Seu objetivo é empacotar todos os módulos de uma aplicação a partir de um ou mais pontos de entrada em um ou mais bundles, que são arquivos estáticos contendo tudo que a aplicação precisa para funcionar
 * - O webpack controi um grafo de dependências para os pontos de entrada, o que permite saber exatamente quais módulos são necessários
 * - https://webpack.js.org
 * 
 * Peças chaves do webpack:
 * - Entry: pontos de entrada de onde o webpack procurará por arquivos para empacotar
 * - Output: a saída resultante do processo de empacotamento dos módulos
 * - Loaders: por padrão, o webpack entende apenas javascript e json. Loaders permitem que o webpack consiga entender outros tipos de arquivos (como .css, por exemplo), transformando-os em módulos válidos e incluindo-os no grafo de dependências
 * - Plugins: são utilizados para estender o comportamento do webpack, realizando tarefas mais elaboradas que os loaders (que apenas transformam módulos)
 *  
 * Por que usar o webpack?
 * - Possibilidade de trabalhar com módulos de forma fácil, inclusive módulos CommonJS
 * - Possibilidade de automatizar o gerenciamento dos módulos e dependências da aplicação
 * - Empacotar os módulos em arquivos estáticos, permitindo que eles sejam servidos na web de forma mais fácil e rápida
 * - Webpack é uma das soluções mais utilizadas do mercado para gerenciamento de assets estáticos, sendo utilizado por grandes empresas e frameworks populares como Next.js, Vue.js, etc.
 */