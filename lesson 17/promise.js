function sendData() {
    let userFName = document.getElementById('userFirstName').value;
    let userLName = document.getElementById('userLastName').value;

    let url = '/user-data?userEmail=' + userFName + userLName + '@gmail.com';

    promiseServer(url)
        .then(function (response) {
            alert(response);
        }, function (error) {
            alert(error);
        });
}

function promiseServer(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        }
        xhr.send();
    });
}