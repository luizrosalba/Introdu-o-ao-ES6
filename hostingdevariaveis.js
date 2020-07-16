///funcao sem curring 
function fn(){
    console.log(text); /// por causa do hosting a variavel existe 
                       ///mas nao foi definida
    var text = 'Exemplo'; 
    console.log(text); 
}

fn(); 

