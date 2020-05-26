document.getElementById('button').onclick = () => {
    function getDate() {
        let a = document.getElementById('date').value;
        document.getElementById('getDate').innerHTML =
            `${moment(a).format('MMMM Do YYYY')} it <h3>${moment(a).format('dddd')}</h3>
            and in ${moment(a).add(20, 'year').format('YYYY')} years it will be
            <h3>${moment(a).add(20, 'year').format('dddd')}</h3>!`;
    }
    getDate();
}




