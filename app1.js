$(document).ready(function(){
$("#add").click(function() {
	var my_input = $("#spacer").val();
	var add_list = $("ul").append('<li class="todo">'+my_input).show();

	});


$("ul").dblclick(function(e){
  	var source = $(e.target);
  	console.log(source.prop('tagName'));
  	if (source.prop('tagName')== 'LI'){
  	   source.toggleClass("done");
  }
    });
$("#clear").click(function(){
	var clear_list = $("ul").empty();
}
	);


});


