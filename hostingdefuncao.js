///funcao sem curring 
function fn(){
    log('Hosting de funcao'); /// o hosting de funcao iça a definicao da função para antes do seu uso 
    function log(value){
        console.log(value);  /// aqui a variavel já é conhecida 
    }
    
}

fn(); 

