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

####  Principal diferença entre funcao arrow e function normal 

this referencia o contexto em que foi criada  
em funcoes que são arrow function o this aponta sempre para o contexto no qual ele foi criado (ex fora da funcao )
em funcoes que não são arrow function o this aponta sempre para o contexto no qual o this é executado (ex. dentro da função) 

####  Array 
Também é um objeto . Importante ! Filter map e reduce (sempre criam um novo objeto a partir do objeto original) 
Filter -> filtra  ( ex: só valores acima de 10) 
Map -> cria um novo array realizando uma funcao em cada elemento (ex mult todo mundo por 2 ) 
Reduce -> aplica uma funcao a todos os elementos da esquerda para direita (ex: soma todos os valores)

Definicao 
https://www.w3schools.com/js/js_arrays.asp
métodos 
https://www.w3schools.com/js/js_array_methods.asp
Sort 
https://www.w3schools.com/js/js_array_sort.asp
iteração 
https://www.w3schools.com/js/js_array_iteration.asp


####  Operadores:  
JS possui operadores unários, binario  e ternário 

a = ++2 unário /// a jah recebe valor incrementado 
b = 2++ unário /// b recebe o valor atual 2 

a+b binário 
a%b binário resto 
&& and 
|| or 
!true retorna false
!false retorna true 
!"Gato" retorna false /// string preenchida com valor é true 
" " true 
1
"" false 
0

!! 


ternário 
condicao ? valor1:valor2 
true ? 'foo' : 'bar' /// retorna 'foo' 
false ? 'foo' : 'bar' /// retorna 'bar' 

+true  soma 1 
+false soma zero ( funciona como se fosse um parse int) 
+"3" retorna 3 

2**3 exponenciacao 

== igualdade (true) 
=== igualdade e do mesmo tipo (true) 
!== operandos iguals mas nao sao do mesmo tipo (true) 





####  Operador Spread:  

Introduzido no ES6 

Itera cada item e passa um parametro 

var parter = ['ombro','joelho'] ; 
var musica = ['cabeca',...partes,'e,'pes'] ; 

concatena dois arrays criando um novo array , no lugar de partes insere ombro joelho 

function fn (x,y,z) {}
var args = [0,1,2]; 
fn(...args) ;  /// x = 0 , y = 1 , z = 2 


####  Operador delete e typeof são unários 

####  Operador in 

var musica = new Array ["A", "B", "C"] ; 

0  in musica /// true 
"A" in musica; /// retorna false vc deve especificar o num do indice e nao o valor 
"A" in musica[0]; /// retorna true 
"lenght" in musica /// true pois length é uma propriedade de todo string 

####  Operador binario instanceof 
Verifica se um objeto é uma instancia 

var dia = new Date (2018,12,17); 
if (dia instance of Date) // true 



####  for in e for of 

for in -> Passa por todos os valores dos objetos 

for of ->  retorna o indice de cada objeto 

####  continue 
if (element %2 ===0 )
continue 

pula a execução para os pares 
