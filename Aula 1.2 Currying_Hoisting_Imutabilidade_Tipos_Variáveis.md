# Aula 1.2 Currying, Hoisting, Imutabilidade, Tipos e Variáveis
curring -> Técnica de transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro vamos retornando uma nova função

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/curring.js

hoisting -> Foi um dos motivos para ter o escopo de bloco com let e const, ficou mais amigável , para nao permitir a utilização de uma variavel antes de ser definida.

hosting de variáveis -> eleva a criação da variavel e não sua atribuição hosting de funções -> eleva a função até a assinatura

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdevariaveis.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdefuncao.js

Nos exemplos anteriores vemos que a função funciona ok mas a variável dá undefined pois hosting declara a funcao mesmo antes de sua utilizacao e nao atribui valor a variável , apenas a cria

Imutabilidade -> Em linguagens funcionais o tipo de dado da variável nunca muda. O ES6 permite adicionar parametros a objetos. Evita alterações indesejadas nos atributos

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade2.js

O exemplo acima a lista de alunos nao sofre mudancas

Tipos e Variáveis -> var , let , const

var-> pioneiro no js , escopo global let e const -> escopo de bloco

obs : Se você atribui um tipo a uma variável primitiva const , ele nao permite que você altere este valor. Agora se vc criar um objeto const ai ele permite que você altere as propriedades desse objeto.

ex: const name = 'A'; name = 'B'; /// nao consigo alterar

const user = { name : 'A'; }; user.name = 'B' ; /// consigo alterar

user = { name : 'B'; }; /// nao dá certo

Tipos e variáveis
Obs : Retorna typeof retorna o tipo da variável

####string = texto

lenght,replace(procura e muda) ,slice (fatia da string), substr
tipo : https://www.w3schools.com/js/js_strings.asp métodos : https://www.w3schools.com/js/js_string_methods.asp Conversão : parseFloat (com casas decimais) parseInt (sem casas decimais)

number = numero (int, float,NAN etc... )
tipo : https://www.w3schools.com/js/js_numbers.asp métodos : https://www.w3schools.com/js/js_number_methods.asp

boolean = true ou false ,
null = nulo -> null sempre é object.(typeof null retorna object)
undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)
object =
ex: let user = { name:'Guilherme', endereco:'ABC' };

user.name = 'outro nome' ;/// funciona user['name'] = 'outro nome'; // funciona

const prop ='name'; user[prop] = 'outro nome' ; ///acessa o objeto com valor dinâmico name

function getProp(prop){ /// tb funciona return user[prop]; }

user.lastName = 'Cabrini'; ///cria uma nova propriedade

funções de object:
let user = { name:'Guilherme', endereco:'ABC' };

Object.keys(user); -> retorna as chaves name e endereço

Object.values(user); -> retorna aos valores armazenados nas chaves name e endereço

Object.entries(user); -> retorna um array de arrays, os arrays filhos tem a chave e o valor;

Object.assign(user,{fullName: 'Luiz Sousa' }); -> pega o objeto e concatena fullname ao objeto /// nao eh muito recomendado, nao altera o array principal, para mergear arrays é mais recomendado

novoObjUsrComAge=Object.assign({},user,{age :26}); /// novo array mergeando user com age , nao muda user

Object.freeze(user); /// nao permite qualquer alterações (criar, alterar , etc )no user

Object.seal(user); /// nao permite crie ou deletar keys, mas pode trocar o valor de uma key

delete user.name ; /// deleta a key name

function = também é um objeto , mas que pode ser chamado array = um objeto que tem relação com os itens dele , relacionando cada item com o tipo atribuido

##### symbol cria um tipo unico
Permite atributos privados dentro de objetos e classes, simulando um objeto do tipo enum. Não é enumerable (isso é vc nao consegue enumerar ela como uma chave dentro de um for)

ex da propriedade enumerable :

for (const key in user ){ if (user.hasOwnProperty(key)){ console.log(${key}) /// so mostra as chaves que nao sao symbols }

}

/// pode ser contornado pela função get.OwnPropertySymbols() /// ai o for consegue listar

ou também pode ser usado o método Reflect.ownKeys(user); /// o metodo reflect consegue forçar a listagem de symblos

ex1) const symbol1 = Symbol(); const symbol2 = Symbol();

symbol1 === symbol2 ; / / retorna falso , cada um tem um tipo unico

ex2) const symbol1 = Symbol('name'); const symbol2 = Symbol('name');

const user = { [symbol1]: 'ABC', [symbol2]: 'DEF', } /// vc nao consegue sobrescrever essa propriedade mesmo elas tendo o mesmo atributo (name), ele vai criar dois symbols com name
