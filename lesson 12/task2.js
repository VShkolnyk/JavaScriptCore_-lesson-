function show(data) {
    console.log(data);
}

function someOperation(num1, num2, operation) {
    if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        return num1 / num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '+') {
        return num1 + num2;
    } else if (operation === '%') {
        return num1 % num2;
    }
    throw Error;
}

try {
    show(someOperation(2, 4, '+'));
    show(someOperation(2, 4, '-'));
    show(someOperation(2, 4, '*'));
    show(someOperation(2, 4, '$'));
    show(someOperation(2, 4, '%'));
    show(someOperation(2, 4, '/'));
} catch (e) {
    show('Ви ввели невірну операцію');
}

