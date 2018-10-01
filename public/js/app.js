$(function(){

    const render = function(){
        $('.content').empty();
        
        $.ajax({url:'/api/todoList' , method: 'GET'})
        .then(function(todolist){
            let htmlstr = $('<div>').addClass('todoContent');
            todolist.forEach(e =>
            htmlstr.append(
                $('<button>')
                    .addClass('far fa-square clear checkTodo')
                    .attr('data-selection',false)
                    .attr('id',`change`)
                    .attr('data-check',`${e.todoList}`),
                $('<p>')
                    .text(e.todoList)
                    .addClass('textTodo')
                    .attr('data-name',`${e.todoList}`),
                $('<button>')
                    .addClass('fas fa-times clear deleteTodo'),
                $(`<br/>`)
            )
            )
            $('.content').html(htmlstr);
        })
    }

    const checkToggle = function(){
        $(this).toggleClass("fa-square fa-check-square");
        $(this).data('selection', ! $(this).data('selection'));
    }
    $(`.content`).on('click',`#change`, checkToggle);

    $(`#buttonGo`).on('click',function(){
        let checkBoolean = $('.checkTodo');
        checkBoolean.map(e => {
            if(e.selection == true){
                console.log(e.selection);
            }else if(e.selection == false){
                console.log(e.selection);
            }
        })
        
    })
    render();
})


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