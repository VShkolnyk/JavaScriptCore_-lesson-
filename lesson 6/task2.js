function randomNumber(number) {
    return Math.round(Math.random() * number);
}

let a = randomNumber(1000);
let b = randomNumber(1000);
let c = randomNumber(1000);
let d = randomNumber(1000);
let e = randomNumber(1000);
let f = randomNumber(1000);
let g = randomNumber(1000);
let array = [a, b, c, d, e, f, g];

console.log(array);


function min() {
    let minNumber = array[0] ;
    for (let i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i];
        }
    } console.log(minNumber);
}

min(array);

