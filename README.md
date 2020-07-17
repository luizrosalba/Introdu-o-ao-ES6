
# Introdução ao ES6 essencial 
Curso da Digital Innovation One para introdução ao javascript ES6 Essencial 
Utilizando https://pandao.github.io/editor.md/en.html para editar este arquivo 

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
  
  
### Currying, Hoisting, Imutabilidade, Tipos e Variáveis

curring -> Técnica de transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro vamos retornando uma nova função 

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/curring.js

hoisting ->  Foi um dos motivos para ter o escopo de bloco com let e const, ficou mais amigável , para nao permitir a utilização de uma variavel antes de ser definida. 

hosting de variáveis -> eleva a criação da variavel e não sua atribuição 
hosting de funções -> eleva a função até a assinatura  

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdevariaveis.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdefuncao.js

Nos exemplos anteriores vemos que a função funciona ok mas a variável dá undefined pois hosting declara a funcao mesmo antes de sua utilizacao e nao atribui valor a variável , apenas a cria 

Imutabilidade -> Em linguagens funcionais o tipo de dado da variável nunca muda. O ES6 permite adicionar parametros a objetos. Evita alterações indesejadas nos atributos 

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade2.js

O exemplo acima a lista de alunos nao sofre mudancas 

Tipos e Variáveis -> var , let , const 

var-> pioneiro no js , escopo global 
let e const -> escopo de bloco 

obs : Se você atribui um tipo a uma variável primitiva const , ele nao permite que você altere este valor. Agora se vc criar um objeto const ai ele permite que você altere as propriedades desse objeto. 

ex:
const name = 'A';
name = 'B'; /// nao consigo alterar 

const user = {
 name : 'A';
};
user.name = 'B' ; /// consigo alterar 

user = {
 name : 'B';
}; /// nao dá certo


### Tipos e variáveis
Obs : Retorna typeof retorna o tipo da variável 

####string = texto 
##### lenght,replace(procura e muda) ,slice (fatia da string), substr
tipo : 
https://www.w3schools.com/js/js_strings.asp
métodos : 
https://www.w3schools.com/js/js_string_methods.asp
Conversão : 
parseFloat (com casas decimais)
parseInt  (sem casas decimais)

##### number = numero (int, float,NAN etc... )
tipo : 
https://www.w3schools.com/js/js_numbers.asp
métodos : 
https://www.w3schools.com/js/js_number_methods.asp

##### boolean = true ou false , 

##### null = nulo  -> null sempre é object.(typeof null retorna object)

 
#####  undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)
 
##### #####  symbol = valores unicos  cria um "enum", 
 
 ##### object = 
 ex: 
 let user = {
 	name:'Guilherme',
	endereco:'ABC'
 };
 
 user.name = 'outro nome' ;/// funciona
 user['name'] = 'outro nome'; // funciona

const prop ='name';
user[prop] = 'outro nome' ; ///acessa o objeto com valor dinâmico name


function getProp(prop){ /// tb funciona
 	return user[prop];
 }
 
 user.lastName = 'Cabrini'; ///cria uma nova propriedade
 
 ##### funções de object: 
  let user = {
 	name:'Guilherme',
	endereco:'ABC'
 };
 
 Object.keys(user); -> retorna as chaves name e endereço 
 
 Object.values(user); -> retorna aos valores armazenados nas chaves name e endereço 
 
 Object.entries(user); -> retorna um array de arrays, os arrays filhos tem a chave e o valor; 
 
 Object.assign(user,{fullName: 'Luiz Sousa' }); -> pega o objeto e concatena fullname ao objeto  /// nao eh muito recomendado, nao altera o array principal, para mergear arrays é mais recomendado 
 
 novoObjUsrComAge=Object.assign({},user,{age :26}); /// novo array mergeando user com age , nao muda user 
 
 Object.freeze(user); /// nao permite qualquer alterações (criar, alterar , etc )no user
 
  Object.seal(user); /// nao permite crie ou deletar keys, mas pode trocar o valor de uma key

delete user.name ; /// deleta a key name

 function = também é um objeto , mas que pode ser chamado 
 array = um objeto que tem relação com os itens dele , relacionando cada item com o tipo atribuido
 
