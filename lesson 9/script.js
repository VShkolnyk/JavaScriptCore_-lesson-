function show(data) {
    console.log(data);
}

// 1.
let products = [];
products = products.length;
show(products);

// 2.
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
show(styles);
styles[styles.length - 2] = 'Класика';
show(styles);
let del = styles.shift();
show(del);
styles.unshift('Реп', 'Реггі');
show(styles);

// 3.

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return -1;
}

show(find([1, 2, 4, 6, 7, 9], 4));
show(find([1, 2, 4, 6, 7, 9], 3));

// 4.

filterRange([2, 4, 23, 18, 10, 15, 22, 56, 34, 67, 30], 14, 30);

function filterRange(array, a, b) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] >= a && array[j] <= b) {
            show(array[j]);
        }
    }
}

// 5.

let out = '';

function camelize(str) {
    for (let k = 0; k < str.length; k++) {
        if (str[k] === '-') {
            out += '';
        } else if (str[k] === 's') {
            out += 'S';
        } else {
            out += str[k];
        }
    }
}

camelize('my-short-string');
show(out);

// другий спосіб вирішення

function camelize2(str) {
    let string = str.split('-');
    for (let y = 1; y < string.length; y++) {
        let letter = string[y];
        string[y] = letter[0].toUpperCase() + letter.slice(1);
    }
    return string.join('');
}

show(camelize2('my-short-string'));
