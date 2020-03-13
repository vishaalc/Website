'use strict';

(function ($) {

	$(document).ready(function () {

		// Preload bounce
		var $preload = $('#preload');
		if ($preload.length) {
			$(window).on('load', function () {
				$preload.fadeOut(400);
			});
		}

		// Toggle pages
		$('li.menu-item').on('click', function (e) {
			if (!$(this).hasClass('active')) {
				var previousItem = $('.menu-list > li.active')
			    previousItem.removeClass('active');
			    $(this).addClass('active');

			    var previousPage = previousItem.children('a').attr('target'),
			    	nextPage = $(this).children('a').attr('target');
			    $('#'+previousPage).hide(500);
			    $('#'+nextPage).show(500);

			    $header.removeClass('active');
				$hideMenu.removeClass('active');
			}
		});

		var $header = $('.header');

		// Mobile Menu
		var $menuBtn = $('.menu-mobile'),
			$hideMenu = $('.hide-menu');

		$menuBtn.on('click', function () {
			$header.toggleClass('active');

			if ($header.hasClass('active')) {
				$hideMenu.addClass('active');
			}
			else {
				$hideMenu.removeClass('active');
			}
		});

		// Hide dim overlay
		$hideMenu.on('click', function () {
			$header.removeClass('active');
			$hideMenu.removeClass('active');
		});

		
	});

})(jQuery);