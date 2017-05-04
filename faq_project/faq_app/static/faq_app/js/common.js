$(function() {

		$('button[style]').click(function(e) {
			var Fields = $('.fields');
			var ControlGroup = $('.control-group:first').css({"display": "block"});
			$(ControlGroup.clone()).val('').appendTo(Fields);
		});

		$('.edit-answer-mnu #video').click(function(e) {
			$('.edit-answer-content-picture').css({"display": "none"});
			$('.edit-answer-content-text').css({"display": "none"});
			$('.edit-answer-content-maps').css({"display": "none"});
			$('.edit-answer-content-video').css({"display": "block"});
		});
		$('.edit-answer-mnu #text').click(function(e) {
			$('.edit-answer-content-picture').css({"display": "none"});
			$('.edit-answer-content-video').css({"display": "none"});
			$('.edit-answer-content-maps').css({"display": "none"});
			$('.edit-answer-content-text').css({"display": "block"});
		});
		$('.edit-answer-mnu #maps').click(function(e) {
			$('.edit-answer-content-picture').css({"display": "none"});
			$('.edit-answer-content-text').css({"display": "none"});
			$('.edit-answer-content-video').css({"display": "none"});
			$('.edit-answer-content-maps').css({"display": "block"});
		});
		$('.edit-answer-mnu #picture').click(function(e) {
			$('.edit-answer-content-video').css({"display": "none"});
			$('.edit-answer-content-text').css({"display": "none"});
			$('.edit-answer-content-maps').css({"display": "none"});
			$('.edit-answer-content-picture').css({"display": "block"});
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
