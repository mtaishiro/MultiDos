$(".todoinput").on("keypress", function(event){
    if (event.which === 13){
        //grab the text from input
        var todoText = $(this).val();
        $(this).val("");

        //create a new li and add to ul
        $(this).prev().children('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$(".myplusicon").on("click", "i", function(){
    var plusIcon = $(".myplusicon");
    var todoList = $(".mytodocontainer:first-child").clone(true);
    $(this).parents(".mywrapper").append(todoList);
    plusIcon.fadeOut(200);
    todoList.fadeIn(300);
    // todoList.removeClass("displaynone");
    $(this).parents(".mywrapper").children(".mytodocontainer:last-child").append(plusIcon);
    plusIcon.fadeIn(200);
});

// $("input[type='text']").keypress(function(event){
//     if (event.which === 13){
//         //grab the text from input
//         var todoText = $(this).val();
//         $(this).val("");

//         //create a new li and add to ul
//         $(this).prev().append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
//     }
// });