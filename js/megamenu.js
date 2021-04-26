$(function () {
    $(document).on('mouseover', '.has-dropdown', function(e) {
		let target = $(e.currentTarget);
		$(target).addClass('is-hover');
	});

	$(document).on('mouseleave', '.has-dropdown', function(e) {
		let target = $(e.currentTarget);
		
		setTimeout(function() {
			$(target).removeClass('is-hover');
		}, 150)
	});
});