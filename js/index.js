// stable_box slideToggle

$(document).ready(function(){
	var box = $('#stable .stable_box');

	box.click(function(){
		$("#stable .stable_box").removeClass('active');
		$("#stable .stable_box p").css("display", "none");
		$(this).children('p').css("display", "block");
		$(this).addClass('active');

	});
});

// scroll top

$(document).ready(function(){
	var scrollTop = $('#scroll_top');

	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			scrollTop.css("display", "block");
		} else {
			scrollTop.css("display", "none");
		}
	})

	scrollTop.click(function(){
		$("html, body").animate({scrollTop: 0}, 100);
	})
});

//click scroll of navbar 

$(document).ready(function(){
	var navLinks = $(".navbar .nav-link");
	console.log(navLinks);

	navLinks.click(function(){
			for(i = 0; i < navLinks.length; i++) {
				var id = $(this).attr("data-id");
			}

			$("html, body").animate({scrollTop: $("#" + id).offset().top});
	})

})