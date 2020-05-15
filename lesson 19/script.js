userAgeGet.onblur = function (){
    if (isNaN(this.value)) {
        this.classList.add('error');
        this.value = 'Enter a number';
        userAgeGet.focus();
    } else if (this.value > 100 || this.value < 1) {
        this.classList.add('error');
        this.value = 'Enter age from 1 to 100'
        userAgeGet.focus();
    } else {
        this.style.backgroundColor = 'white';
    }
}
userAgePost.onblur = function (){
    if (isNaN(this.value)) {
        this.classList.add('error');
        this.value = 'Enter a number';
        userAgePost.focus();
    } else if (this.value > 100 || this.value < 1) {
        this.classList.add('error');
        this.value = 'Enter age from 1 to 100'
        userAgePost.focus();
    } else {
        this.style.backgroundColor = 'white';
    }
}

$(document).ready(function () {
    $('#sendDataByGetMethod').click(function () {
        let userData = {
            userFirstName: document.getElementById('userFirstNameGet').value,
            userLastName: document.getElementById('userLastNameGet').value,
            userAge: document.getElementById('userAgeGet').value,
            userCity: document.getElementById('userCityGet').value
        }

        $.get('/formGet?userFirstName=' + userData.userFirstName +
            '&userLastName=' + userData.userLastName + '&userAge=' + userData.userAge +
            '&userCity=' + userData.userCity), function (data) {
            $('#serverData').html(data);
            console.log('Data is loaded by GET');
        }
    });
    $('#sendDataByPostMethod').click(function () {
        $.post('/formPost', {
            userFirstName: document.getElementById('userFirstNamePost').value,
            userLastName: document.getElementById('userLastNamePost').value,
            userAge: document.getElementById('userAgePost').value,
            userCity: document.getElementById('userCityPost').value
        }), function (data) {
            $('#serverData').html(data);
            console.log('Data is loaded by POST');
        }
    });
});