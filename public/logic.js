$(function () {
    $('button').on('click', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('.burger-input').val().trim(),
            devoured: 0
        }
        console.log(newBurger);

        $.ajax('/api/burgers/', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log('created new burger');
                location.reload();
            }
        )
    })
    $('.devour-button').on('click', function (event) {

        var id = $(event.target).data('id');
        console.log(id);

        var newDevourState = {
            devoured: false
        };

        $ajax('../api/burgers/' + id, {
            type: 'PUT',
            data: newDevourState
        }).then(
            function () {
                console.log('change devoured to ${newDevourState}');
                location.reload();
            }
        )
    })
});