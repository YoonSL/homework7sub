$(function () {

    const render = function () {
        $('.content').empty();
        $('#buttonGo').removeClass('changingTodo');
        $('#buttonGo').addClass('addingTodo');

        $.ajax({ url: '/api/todoList', method: 'GET' })
            .then(function (todolist) {
                let htmlstr = $('<div>').addClass('todoContent');
                todolist.forEach(e =>
                    htmlstr.append(
                        $('<button>')
                            .addClass('far fa-square clear checkTodo')
                            .attr('id', `change`)
                            .attr('data-selection', false)
                            .attr('data-check', `${e.todoList}`)
                            .attr('data-id',`${e._id}`),
                        $('<p>')
                            .text(e.todoList)
                            .addClass('textTodo')
                            .attr('data-name', `${e.todoList}`),
                        $('<button>')
                            .addClass('fas fa-times clear deleteTodo')
                            .attr('data-delete', `${e.todoList}`)
                            .attr('id', 'deleteList'),
                        $(`<br/>`),
                    )
                )
                $('.content').html(htmlstr);
            })
    }

    // $('.content').on('click','#change',function(){
    //     const check = $('#change').checked;
    //     console.log(check);
    // })


    const checkToggle = function () {
        $(this).toggleClass("fa-square fa-check-square");
        $('#buttonGo').toggleClass("addingTodo changingTodo");
        let changeTodo = $(this).data('id');
        console.log(changeTodo);

        $(document).on('click','.changingTodo',function(event){
            event.preventDefault();
            let newTodo = $(`#add`).val().trim();
            
            let newDatatoSend = {
                _id: changeTodo,
                todoList: newTodo
            };
            console.log(changeTodo);
            console.log(newTodo);
            console.log(newDatatoSend);
            $.ajax({ url: '/api/todoList', method: `PUT`, data: newDatatoSend })
                .then(function () {
                    changeTodo = '';
                    render();
                })
        })
    };

    $(document).on('click', `.addingTodo`,function (event) {
        event.preventDefault();

        const newTodo = {
            todoList: $('#add').val().trim()
        };
        $.ajax({ url: '/api/todoList', method: 'POST', data: newTodo })
            .then(function (data) {
                if (data._id) {
                    $('#add').val('');
                    $('#add').focus();
                    render();
                } else {
                    console.log(data._id);
                    alert('Something is wrong');
                }
            })
    });
    


    $(`.content`).on('click', `#change`, checkToggle);





    $(`.content`).on('click', `${'#deleteList'}`, function () {
        const deleteID = $(this).data('delete');
        const deleteTodo = {
            todoList: deleteID
        };
        $.ajax({ url: '/api/todoList', method: 'DELETE', data: deleteTodo })
            .then(function () {
                render();
            })
    });
    render();
});


// function(){


// $(this).attr('data-selection', ($(this).attr('data-selection') == true ? false : true));    
// $(this).data('selection', ! $(this).data('selection'));
//     let checkBoolean = $(this).data('selection');
//     let checkID = $(this).data('check');
//     if(checkBoolean == true){
//         $(this)
//         .removeClass('far fa-square clear checkTodo')
//         .addClass('far fa-check-square clear checkTodo');
//         // console.log(checkBoolean);
//         // console.log(checkID);
//     } else if(checkBoolean == false){
//         $(this)
//         .removeClass('far fa-check-square clear checkTodo')
//         .addClass('far fa-square clear checkTodo');
//         // console.log(checkBoolean);
//     }
// }

// const listID = $(this).data('check')
//         let htmlstr = $('<div>').addClass('addText');
//         htmlstr.append(
//             $('<input>')
//                 .addClass('addInput')
//                 .attr('placeholder', 'New inventory value'),
//             $('<button>')
//                 .addClass('btn btn-primary')
//                 .attr('id', 'addSubmit')
//                 .attr('data-id', `${listID}`)
//                 .text('Submit')
//         )
//         $(`#${listID}`).html(htmlstr);