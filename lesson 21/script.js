$(function () {
    $('#accordion').accordion({
        active: 'none'
    });

    $('div#draggable').draggable({
        helper: "clone"
    });
    $('#droppable').droppable({
        drop: function (event, ui) {
            $(this)
                .find('p');

            document.getElementById('number').innerHTML = (`<h2>You drop inside ${number.count += 1} times<h2>`);
        },
        hoverClass: 'hover'

    });
    let number = {
        count: 0
    }
});