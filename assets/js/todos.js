// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Delete item by clicking span
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new item from input when 'enter' pressed
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grab new todo text from input
		var todoText = ($(this).val());
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		// clear input
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});