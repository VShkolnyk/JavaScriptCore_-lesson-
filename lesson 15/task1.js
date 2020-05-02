
function removeText() {
    let someDiv = document.getElementById('text');
    if (someDiv.hidden == false) {
        someDiv.hidden = true;
    }else if (someDiv.hidden == true){
        document.querySelector('button').hidden = true;
    }
}
