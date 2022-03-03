import names from './names.js'

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const testStudent = new Student("xxx", 12);


const classroom1 = [testStudent, testStudent];

for(let i=0; i <= 100; i++){
    let index = parseInt(Math.random() * 100);
    let age = parseInt(Math.random() * 100);
    let studentToAdd = new Student(names[index], age)
    classroom1.push(studentToAdd);
}

const classroom2 = [testStudent, testStudent];

for(let i=0; i <= 100; i++){
    let index = parseInt(Math.random() * 100);
    let age = parseInt(Math.random() * 100);
    let studentToAdd = new Student(names[index], age)
    classroom2.push(studentToAdd);
}

const filtered = classroom1.filter(function(item) {

    for(let i=0; i < classroom2.length; i++){
        if(classroom2[i].name == item.name && classroom2[i].age == item.age){
            return item;
        }
    }

})

console.log(filtered);
