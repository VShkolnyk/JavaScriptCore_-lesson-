function show(data) {
    console.log(data);
}

let Student = [];

Student.push({
    name: 'Alex',
    sex: 'male',
    age: 18
});
Student.push({
    name: 'John',
    sex: 'male',
    age: 23
});
Student.push({
    name: 'Olla',
    sex: 'female',
    age: 20
});
Student.push({
    name: 'Dave',
    sex: 'male',
    age: 20
});
Student.push({
    name: 'Suzan',
    sex: 'female',
    age: 18
});

show(Student);


let filterStudent = Student.filter(function (x) {
    return x.age < 21 && x.sex === 'male';
});
filterStudent.forEach(show);


let yearsUnderAge = filterStudent.map(function (y) {
    return 21 - y.age;
})
yearsUnderAge.forEach(show);


function sortStudent(a, b) {
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        if (aName > bName) {
            return 1;
        } else if (bName > aName) {
            return -1;
        } else {
            return 0;
        }
    }
}

Student.sort(sortStudent);
Student.forEach(show);


