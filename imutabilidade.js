const user = { 
    name: 'luiz',
    lastName: 'Sousa'
};

///recebe um usuario e adiciona um parametro 
/// retornando o nome completo (fullName)
function getUserWithFullName(user){
    return{
        ...user,
        fullName:`${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user); 

console.log(userWithFullName,user);  
/// criou um novo objeto sem alterar 
/// sua referencia 
