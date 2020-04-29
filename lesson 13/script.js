let name = prompt('Введіть імя');
document.write(name);


document.getElementById('button').onclick = function () {
    let changeColor = document.getElementsByTagName('a');
    for (let i in changeColor) {
        if (changeColor[i].innerHTML.includes('http') || changeColor[i].innerHTML.includes('ftp')) {
            if (changeColor[i].innerHTML.includes('internal')) {
                return;
            }
            changeColor[i].className = 'external-red';
        }
    }
}
