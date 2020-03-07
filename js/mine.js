$(document).ready(function(){
	$('#see_my_portfolio').on('click', function(){
		$('html, body').animate({
				scrollTop: $('#portfolio').offset().top - 80
			},
			'slow'
		);
	});

	$('#how_it_works_link').on('click', function(){
		$('html, body').animate({ scrollTop: $('#how_it_works').offset().top }, '2000');
	});
});
