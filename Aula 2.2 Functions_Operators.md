##  Aula 2.2 Functions_Operators 

#### ES 6 Arrow function 
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;   /// se colocar mais de uma expressão tem que colocar o return 

const x = (x, y) => { return x * y };  /// boa pratica colocar return sempre 

####  Funções também são objetos e podem receber propriedades ! 

const Fn = () => 'Code here' ; 

Fn.prop = 'Posso criar propriedades'; 
console.log (Fn.prop);

const fn1 =>  fnparam => allowed => { /// uma funcao que recebe um parametro e e se permitido executa outra funcao 
 if (allowed) {
   fnParam(); 
 }
 
}

/// A funcao abaixo pode ser reescrita como 

function controlFnExec (fnParam)
{
   return function(allowed) {
      if (alloed) {
         fnParam();
      }
   }
}

/// a funcao abaixo é a reescrita da funcao acima usando arrow function 


function controlFnExec (fnParam)
{
   return function(allowed) {
      if (allowed) {
         fnParam();
      }
   }
}

const controlFnExec => fnParam => allowed => {  /// mais enxuto , mais limpo 
   if (allowed) {
      fnParam();
   }
}

####  Características da funcao arrow function 

this referencia o contexto em que foi criada  
em funcoes que são arrow function o this aponta sempre para o contexto no qual ele foi criado (ex fora da funcao )
em funcoes que não são arrow function o this aponta sempre para o contexto no qual o this é executado (ex. dentro da função) 


