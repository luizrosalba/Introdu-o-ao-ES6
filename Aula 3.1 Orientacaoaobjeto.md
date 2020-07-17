###  Aula 3.1 Orientação à objeto 

### Herança 
Baseada em protótipos 
prototype : variável que armazena definições do projeto. 
Sempre que criamos uma variável em javascrypt ele cria uma variavel __proto__ que aponta para o tipo da variável que criamos (construtor) 

Toda função construtora tem um prototype 

myText.__proto__.split é o mesmo que my myText.split ou ainda String.prototype.split

myText.__proto__.split === String.prototype.split /// true 

myText.constructor === String ///true 

__proto __ -> prototype -> constructor 

new Foo(); /// um novo objeto é criado a partir da função construtora Foo herdando Foo.prototype 

se a função construtora tem um retorno será respeitado. Senão será retornado o objeto criado em 1 

function Pessoa(name){
    this.name = name;
    return {
        name:'teste' 
    }; 
  }
  
  const p = new Pessoa ('Guilherme' )
    console.log (p);  /// retrona teste 

function Pessoa(name){
    this.name = name;
  }
   const p = new Pessoa ('Guilherme' ) 
   console.log (p);  /// retorna Guilherme 
   
  

obs  : função call passa um contexto para esta função ser executada 


ex 2: O problema dessa abordagem é que toda vez que realizarmos new Cachorro() latir e movimentar serão criadas 
'use scrict'; 
function Animal (qtdePatas){
    this.qtdePatas = qtdePatas; 
    this.movimentar = function() {
  }
  }


function Cachorro (morde){
  Animal.call(this,4); /// a funcao animal vai ser executada quando Cachorro for instanciada 
  this.morde = morde; 
  this.latir = function() {
   console.log ('Au !'); 
  }
}
//
const pug = new Cachorro (false); 
//const pitbull  = new Cachorro (true); 

console.log(pug); 

ex 3  : Nesta abordagem usamos o prototype que define o objeto cachorro tera qt deparas e movimentar por padrao 
nao serão criadas as funcoes movimentar e latir , se new cachorro já foi dado e um novo objeto for criado , o cachorro terá esta nova propriedade 

'use scrict'; 

function Animal (){}
  Animal.prototype.qtdePatas =0; 
  Animal.prototype.movimentar = function(){}; 

function Cachorro (morde){
  this.qtdePatas = 4; 
  this.morde = morde; 
}

Cachorro.prototype = Object.create(Animal); 
Cachorro.prototype.latir = function(){
  console.log ('Au!');
}

//
const pug = new Cachorro (false); 
//const pitbull  = new Cachorro (true); 
console.log(pug); 

Cuidado! com prototype vc pode trocar a implementação até mesmo de um tipo nativo , vc pode mudar 
a programação do String.split por exemplo 
ex: String.prototype.split = function (){ console.log ('Deu ruim')} ; 



### Classes 

Criado no Es6 como uma simplificação de protótipos , uma supersintaxe de funções , por baixo 
dos panos é criado um prototype 

class Animal {
  constructor(qtdePatas) { 
    this.qtdePatas =4 ; 
    }
}

class Cachorro extends Animal {
  constructor(morde) { 
    super(4); 
    this.morde = morde; 
    }
}
const pug = new Cachorro (false); 
console.log(pug); 


### Modificadores de Acesso 

### Encapsulamento 

### Static





