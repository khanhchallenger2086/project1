// stable_box slideToggle

$(document).ready(function(){
	var box = $('#stable .stable_box');

	box.click(function(){
		$("#stable .stable_box").removeClass('active');
		$("#stable .stable_box p").css("display", "none");
		$(this).find('p').css("display", "block");
		$(this).addClass('active');

	})

})