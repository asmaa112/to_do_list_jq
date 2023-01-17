$("#btn").click(function(){
let display2 = $("<div class='display2' id='aff'></div>")
let check = $('<input>').attr({type:'checkbox', class:'strike'})
display2.append(check)
let task = $("<p></p>").text($("#input").val()).css('color','white');
display2.append(task)
let delete_button = $('<button class="button2">delete</button>').attr({id:'delete1'})
display2.append(delete_button)
$("#display").append(display2)
 
 delete_button.click(function(e){
    $(e.target).parent().remove()
    })



    check.change(function (e){
     if($('.strike').is(':checked')) 
     $(e.target).next().css('text-decoration', 'line-through')
      else
    $(e.target).next().css('text-decoration', 'none')
  
})
});
// function remove(element){
// element.parent().remove()
// }

