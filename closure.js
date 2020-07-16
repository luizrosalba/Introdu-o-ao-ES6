function init(){
    const exemplo = 'essa variavel';
    
    return function(){
        console.log( `1- 0 é : "   ${exemplo} `);
            
        return function(){
            console.log( `2- 0 é : "   ${exemplo} `);
    
            return function(){
                console.log( `3- 0 é : "   ${exemplo} `);
            }
        }
    }
}
    /// realiza uma cadeia de execuções 
    /// note que é dificil ver de onde a variável vem cada variável 
    /// é melhor trabalhar com funções puras que recebem um parametro e retornam alguma coisa 
    /// o ideal seria que as funcões function tivessem exemplo como parametro,
    //  daí saberiamos de onde vem a variável  function(exemplo)


    const initFn1 =init();  
    const initFn2 =initFn1(); 
    const initFn3 =initFn2(); 
    initFn3(); 
    
    console.log("chamando todas de uma vez só") ; 
    init()()()(); /// chamando todas as funcoes de uma vez só 