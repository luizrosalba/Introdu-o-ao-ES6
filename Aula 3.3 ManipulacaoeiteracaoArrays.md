
## Criando arrays 

const arr = [1,2,3]; 
ou

const arr = new Array(1,2,3); 

ou 

const persons = Array.of('Luiz', 'Dani")  ; 
ou 
const numerosEPessoas = Array.of('Luiz', 1)  ; 
ou 
const numerosEPessoas = Array(3)  ;  /// cria uma array com 3 pos vazias 
ou 
const numerosEPessoas = Array(3,1)  ;  /// cria um array com 3 e 1 

Array.from /// cria uma nova instancia de array a partir de um parâmetro array-like ou iterable object


const divArray = Array.from (divs)  /// cria um array a partir do objeto div (que no exemplo do curso era um NodeList). A partir daí pode-se utilizar funções de array como pop , shift , etc  



