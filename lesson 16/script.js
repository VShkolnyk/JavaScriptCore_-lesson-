function sendDataByGetMethod() {
    let userData = {
        userFirstName: document.getElementById('userFirstNameGet').value,
        userLastName: document.getElementById('userLastNameGet').value,
        userAge: document.getElementById('userAgeGet').value,
        userCity: document.getElementById('userCityGet').value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/formGet?userFirstName=' +userData.userFirstName+
        '&userLastName='+userData.userLastName+'&userAge='+userData.userAge+
        '&userCity='+userData.userCity);

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}

function sendDataByPostMethod() {
    let userData = {
        userFirstName: document.getElementById('userFirstNamePost').value,
        userLastName: document.getElementById('userLastNamePost').value,
        userAge: document.getElementById('userAgePost').value,
        userCity: document.getElementById('userCityPost').value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/formPost');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(userData));
}



