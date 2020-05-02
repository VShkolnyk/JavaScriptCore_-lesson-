function addText() {
    let element = document.querySelectorAll('ul>li');
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = 'some text';
    }
    document.querySelector('p').innerHTML = 'Кількість елементів li = ' + element.length;
}
