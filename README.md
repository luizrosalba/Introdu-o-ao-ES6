
# Introdução ao ES6 essencial 
Curso da Digital Innovation One para introdução ao javascript ES6 Essencial 

### História e Conceitos : 
  
  ECMAScript
  
  TC39
  
  babel -> transforma uma versão em uma especificação antiga (mais browser podem ter suporte)
  
  javascript é interpretada -> código é executado de cima pra baixo sem compilar para linguagem de máquina 
  
  Tipagem é fraca  ( não há verificação em todas as operações , ex: você pode somar inteiros com strings ) e dinâmica ( a partir da atribuição o tipo saberá o tipo da variável - inferência de tipo)
  
  Typescript -> É um superset da linguagem, adiciona tipos e funcionalidades que o javascript nao tem por padrão (ex: enum)
  
  Flow -> Semelhante ao typescript em relação a checagem de tipos , mas não é um superset da linguagem. 
  
  Funções de primeira classe : função pode ser atribuita a estrutura de dados e pode ser passada por argumentos ou retornadas por outras funções 
    https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js
  
  Closure -> Escopo léxico -> capacidade da funcao de lembrar o ambiente em que foi criada. 
  
   obs: console.log( `1- 0 é : "   ${exemplo} `); -> mistura variável e texto na impressão 
  
  https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js
  
  
### Currying, Hoisting, Imutabilidade, Tipos e Variáveis

curring -> Técnica de transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro vamos retornando uma nova função 

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/curring.js

hoisting ->  Foi um dos motivos para ter o escopo de bloco com let e const, ficou mais amigável , para nao permitir a utilização de uma variavel antes de ser definida. 

hosting de variáveis -> eleva a criação da variavel e não sua atribuição 
hosting de funções -> eleva a função até a assinatura  

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdevariaveis.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdefuncao.js

Nos exemplos anteriores vemos que a função funciona ok mas a variável dá undefined pois hosting declara a funcao mesmo antes de sua utilizacao e nao atribui valor a variável , apenas a cria 
