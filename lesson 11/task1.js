
function myFunct(str) {
    return str[0].toUpperCase() + str.substring(1);
}
console.log(myFunct('volodymyr'));

function truncate(str, maxlength) {
    if (str.length > maxlength){
        return str.substr(0, maxlength-3).concat('...');
    }else {
        return str;
    }
}

console.log(truncate('Ось, що мені хотілось б сказати на цю тему:', 20));
console.log(truncate('Всім привіт!', 20));

function extractCurrencyValue(str) {
    let reg = /\d{1,21}/g;
    return reg.exec(str);
}

console.log(extractCurrencyValue('$ 120').toString());

