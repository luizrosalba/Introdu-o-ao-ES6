///funcao sem curring 

function soma(a,b) { 
    return a+b; 
}

soma (2,2); 
soma (2,3); 
soma (2,4); 
soma (2,5); 



function somaComCurring(a) { 
    return function(b){
        return a+b;
    }
    
}

const soma2 = somaComCurring(2) ; 

 console.log( soma2(2) ); 
 console.log( soma2(3) ); 
 console.log( soma2(4) ); 
 console.log( soma2(5) ); 

