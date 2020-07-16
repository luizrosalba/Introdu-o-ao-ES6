const students = [
    {
        name: 'A',
        grade: 7
    },
    {
        name: 'B',
        grade: 4
    },
    {
        name: 'C',
        grade: 10
    }

];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >=7); 
}

console.log('Alunos aprovados '); 
console.log(getApprovedStudents(students)); 

console.log('\n Lista de Alunos '); 
console.log(students);  /// a lista inicial nao foi alterada 

var teste = 1;
teste = 'texto';
