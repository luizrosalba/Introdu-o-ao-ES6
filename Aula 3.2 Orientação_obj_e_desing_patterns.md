
# Orientação a objetos e desing patterns 

DP são soluções gerais para problemas recorrentes em desenvolvimento de um software 
Não se trata de um framework ou um código , mas uma definiçao de alto nivel de como um problema pode ser solucionado 


Pattern Languange -> 1978 Christopher Alexander Sara , Murray  253 tipos de problemas / desafios de projetos 

formato de um patterns : 

Nome, Exemplo, contexto , problema, solução.

1987 kent e ward 5 padroes de projetos -> 

1994 Gof Erich, Richard , Ralph John  DP Elements of Reusable OO Software -> Tipos Criação , estruturais e comportamentais 


Padroes de criação : abstraem e / ou adiam o processo de criação dos objetos , tornamm o sistema independete de como seus objetos são criados , compostos e representados 
mais famosos :
  Abstract Factory 
  Builder 
  Factory Method 
  Prototype 
  Singleton 
 
Padroes esttruturais : 

  Se preocupam com a forma como classes e objetos sao compostos para formar estruturas maiores : Adapter, Bridge, Composite, Decorator , Facade , Business Delegate , Flyweight, Proxy 
  
Padroes Comportamentais : 
    Algoritmos e atribuições de responsabilidades entre os objetos, não descrevem apenas padroes classe se objetos , mas tb de comunicação entre os objetos : Chain of Responsibility , Command, Interpreter , Iterator, Mediator , Observer , State, Strategy , Template Method e visitor 
    
   Patterns mais usados em Js : Factory , Singleton , Decorator , Observer e Module 
    
    Factory > Funções que retornam um objeto sem a necessidade de chamalas com new são consideradas factory 
    
    Singleton > cria um unica instancia de uma funcao construtora e retorna-la toda vez que for necessário utilizala (ex: JQuery) , mesmo que você crie uma nova instancia , ela sempre retornará o mesmo valro 
    
    Decorator > Uma funcão que recebe outra função como parametro e altera seu comportamento sem modifica-la explicitamente 
    
    Observer >  A instancia (subscriber) mantem uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças de estado (no VUE a propriedade notify ,toda vez que há uma mudança de estado quem estiver escutando será notificado ) manter uma lista no observer , criar uma função subscribe , outra unsubscribe e notify 
    
    Mdoule > Permite organizar o corido sem a necessidade de expor variáveis globais No ES6 (export default)
    
    
    

    
    
    
    
    
    
  
  
  
