$(document).ready(function(){
	$('#see_my_portfolio').on('click', function(){
		topMenu = $("#navbar-links").outerHeight()+1;
		$('html, body').animate({
				scrollTop: $('#portfolio').offset().top
			},
			'slow'
		);
	});

	$('#navbar-brand').on('click', function(){
		topMenu = $("#navbar-links").outerHeight()+1;
		$('html, body').animate({
				scrollTop: 0
			},
			'slow'
		);
	});

	/*$('#how_it_works_link').on('click', function(){
		$('html, body').animate({ scrollTop: $('#how_it_works').offset().top }, '2000');
	});*/

	// Cache selectors
var lastId,
    topMenu = $(".navbar-links"),
    //topMenuHeight = topMenu.outerHeight()+15,
		topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      //offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
				offsetTop = href === "#" ? 0 : $(href).offset().top;
	  $('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	  // Get container scroll position
	  var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }
	});


	// Each port folio item has two events that display the details,
	// because they have different ways of getting the portfolio details.

	// Show portfolio modal details
	$('.portfolio-details-1').on('click', function(e){
		$('header').removeClass('header_area, navbar_fixed');
		$('.modal').modal('show');
		var siblings = $(this).siblings('.single_portfolio');
		console.log(siblings);

		e.preventDefault();
	});

	// Show portfolio modal details
	$('.portfolio-details-2').on('click', function(e){
		$('header').removeClass('header_area, navbar_fixed');

		var siblings = $(this).parent().siblings('.img-fluid');//.find('.img-fluid');
		$('#modal-image').attr('src', siblings[0].src);
		$('.modal').modal('show');

		e.preventDefault();
	})
});
