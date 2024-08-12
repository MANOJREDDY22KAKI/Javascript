function groupBy(students,property){
    return students.reduce((result,student)=>{
        if(result[student[property]]){
            result[student[property]].push({name : student.name , grade : student.grade});
        }
        else{
            result[student[property]] = [{name : student.name , grade : student.grade}]
        }
        return result;
        
    },{})
}

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'B' }
];
const ans = groupBy(students, 'grade');

console.log(ans)