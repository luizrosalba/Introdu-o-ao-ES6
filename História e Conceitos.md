### História e Conceitos : 
  
  ECMAScript 6 - >ES6, ECMAScript 6 ou ES2015, é simplesmente a mais nova versão do JavaScript.
  
  TC39 -> Na verdade, o nome mais usado atualmente é ES2015. A ideia do comitê responsável (conhecido como TC39) pelas atualizações da linguagem é justamente fazer um release anual. Então nesse ano teremos o ES2016 (ou ES7). E assim sucessivamente. ES6 é o mais conhecido pela comunidade.
  Stage 0: strawman, Stage 1: proposal, Stage 2: draft, Stage 3: candidate e Stage 4: finished
  
  O TC39 focou em alguns objetivos no desenvolvimento do ES6:
Ser uma linguagem melhor para construir aplicações complexas
Resolver problemas antigos do JavaScript
Facilidade no desenvolvimento de libraries


  
  babel -> a grande maioria dos browsers ainda não dão suporte ao ES6, então o que podemos fazer para contornar essa limitação? Podemos usar um transpiler como o Babel. O Babel transforma o seu código de ES6 para ES5 (versão que a maioria dos browsers dá suporte hoje).
  
  javascript é interpretada -> código é executado de cima pra baixo sem compilar para linguagem de máquina 
  
  Tipagem é fraca  ( não há verificação em todas as operações , ex: você pode somar inteiros com strings ) e dinâmica ( a partir da atribuição o tipo saberá o tipo da variável - inferência de tipo)
  
  Typescript -> É um superset da linguagem, adiciona tipos e funcionalidades que o javascript nao tem por padrão (ex: enum)
  
  Flow -> Semelhante ao typescript em relação a checagem de tipos , mas não é um superset da linguagem. 
  
  Funções de primeira classe : função pode ser atribuita a estrutura de dados e pode ser passada por argumentos ou retornadas por outras funções 
    https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js
  
  Closure -> Escopo léxico -> capacidade da funcao de lembrar o ambiente em que foi criada. 
  
   obs: console.log( `1- 0 é : "   ${exemplo} `); -> mistura variável e texto na impressão 
  
  https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js
  
