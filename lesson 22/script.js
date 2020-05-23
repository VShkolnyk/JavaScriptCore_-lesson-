$(function () {
    $('#button').on('click', function () {
        let ageNum = document.getElementById('ageNum').value;
        if (ageNum > 1 && ageNum < 100 && Number.isInteger(+ageNum)) {

            let regDate = new RegExp(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d/g);
            if (regDate.test(document.getElementById('date').value)) {

                let regName = new RegExp(/^[A-Z]\w\w+$/g);
                if (regName.test(document.getElementById('name').value)) {
                    $('#main').effect('blind');
                } else {
                    $('#main').effect('shake');
                }
            } else {
                $('#main').effect('shake');
            }
        } else {
            $('#main').effect('shake');
        }
    });
});
