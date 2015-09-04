var studentsArray = ["Ambar", "Carryl", "Chris", "Christine", "Denis", "Gary", "Jack", "James", "Joshua", "Luke", "Mark", "Mike", "Max", "Niall", "Paco", "Rob", "Sam", "Yao"];

function studentPicker() {
var randomIndex = Math.floor(Math.random()*studentsArray.length);
var randomStudent = studentsArray[randomIndex];
studentsArray.splice(randomIndex,1);
console.log(randomStudent);
console.log(studentsArray.length);
}


position