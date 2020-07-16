function getName(){
return 'Luiz';
}

function logFn(fn){
    console.log(fn()); 
}

const logFnResult = logFn;  // atribuindo uma funcao a uma variável 

logFnResult (getname) ;  /// passando a funcao por argumento 
