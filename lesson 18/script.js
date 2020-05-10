let month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
let time = 1000;
for (let i = 0; i < month.length; i++){
    setTimeout(function () {
        $('ol').append('<li>'+month[i]+'</li>');
    }, time);
    time += 1000;
}

setTimeout(function () {
    $('li:odd').css('color', 'red');
}, 13000);