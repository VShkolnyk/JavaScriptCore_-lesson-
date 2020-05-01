function addText() {
    let element = document.querySelectorAll('ul>li');
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = 'some text';

        document.getElementsByTagName('p')[0].innerHTML = 'Кількість елементів li = ' + element.length;
    }
}
