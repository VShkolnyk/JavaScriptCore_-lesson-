function show(data) {
    console.log(data);
}

let person1 = {name: 'Petro', age: 23};
let person2 = {name: 'Vasyl', age: 20};
let person3 = {name: 'Olia', age: 28};
let person4 = {name: 'Tetiana', age: 26};
let person5 = {name: 'Viktor', age: 23};

let map = new Map();

map
    .set(person1)
    .set(person2)
    .set(person3)
    .set(person4)
    .set(person5);
show(map.size);

let mapKeys = map.keys();

function mapFunc() {
    for (let obj of mapKeys) {
        show('name: ' + obj.name + ', age: ' + obj.age);
    }
}

show(mapFunc(map));


