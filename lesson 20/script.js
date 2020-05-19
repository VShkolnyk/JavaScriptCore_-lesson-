document.getElementById('localStorageButton').onclick = () => {
    function addToLocalStorage() {
        let nameAge = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value
        };
        return localStorage.setItem('LocalStorage', JSON.stringify(nameAge));
    }

    addToLocalStorage();
}

function getFromLocalStorage(key) {
    let json = localStorage.getItem(key);
    return JSON.parse(json);
}

console.log(getFromLocalStorage('LocalStorage'));


document.getElementById('cookieButton').onclick = () => {
    function addToCookie() {
            document.cookie = `Name = ${document.getElementById('name').value}`;
            document.cookie = `Age =  ${document.getElementById('age').value}`;
    }

    addToCookie();
}
console.log(document.cookie);