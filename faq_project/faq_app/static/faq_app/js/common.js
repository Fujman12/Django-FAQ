$(function() {

		// $('button[style]').click(function(e) {
		// 	var Fields = $('.fields');
		// 	var ControlGroup = $('.control-group:first').css({"display": "block"});
		// 	$(ControlGroup.clone()).val('').appendTo(Fields);
		// });
		$('.edit-answer-mnu #text').addClass("active")
		$('.edit-answer-mnu #video').click(function() {
			$('body .edit-answer .edit-answer-mnu ul li').addClass("inactive").removeClass("active");
			$(this).addClass("active").removeClass("inactive");
			$('.edit-answer div[class^="edit-answer-content"] label').html('Video url:');
			$('.answer-hidden-kind').val('2');
		});
		$('.edit-answer-mnu #text').click(function() {
			$('body .edit-answer .edit-answer-mnu ul li').addClass("inactive").removeClass("active");
			$(this).addClass("active").removeClass("inactive");
			$('.edit-answer div[class^="edit-answer-content"] label').html('Text:');
			$('.answer-hidden-kind').val('0');
		});
		$('.edit-answer-mnu #maps').click(function() {
			$('body .edit-answer .edit-answer-mnu ul li').addClass("inactive").removeClass("active");
			$(this).addClass("active").removeClass("inactive");
			$('.edit-answer div[class^="edit-answer-content"] label').html('Map coordinates:');
			$('.answer-hidden-kind').val('3');
		});
		$('.edit-answer-mnu #picture').click(function() {
			$('body .edit-answer .edit-answer-mnu ul li').addClass("inactive").removeClass("active");
			$(this).addClass("active").removeClass("inactive")
			$('.edit-answer div[class^="edit-answer-content"] label').html('Image url:');
			$('.answer-hidden-kind').val('1');
		});
		// $('form>.input-group').click(function(e) {
		// 	$(this).addClass('field-remove');
		// });

		// $('.input-group-btn .btn-danger').click(function(e) {
		// 	$(".field-remove").remove();
		// });

		//$('.lol').tokenfield();
		//$('.lol').tokenfield();
		//$('.lol').tokenfield('createToken', { value: 'violet', label: 'Violet' });
		//$("#tokenfield63").tokenfield('createToken', { value: 'violellllll', label: 'Violet' });


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
