// MENU

const app = (() => {
	let body;
	let menu;
	let menuItems;

	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav-list-item');

		applyListeners();
	};

	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	};

	const toggleClass = (element, stringClass) => {
		if (element.classList.contains(stringClass))
			element.classList.remove(stringClass);else

		element.classList.add(stringClass);
	};

	init();
})();


// IMAGE HOVER

(function($) {
	'use strict';
	$(document).ready(function($) {
		var imageFormatExcerptEl = $('.team div.image-footer');
		imageFormatExcerptEl.on('mouseenter', function() {
			var $this = $(this);
			$this.parent().prev().addClass('hover');
		});
		imageFormatExcerptEl.on('mouseleave', function(){
			var $this = $(this);
			$this.parent().prev().removeClass('hover');
		});
	})
}(jQuery));


// HIDE ON SCROLL

$(document).ready(function () {
	'use strict';
	var c, currentScrollTop = 0,
	header = $('header');

	$(window).scroll(function () {
		var a = $(window).scrollTop();
		var b = header.height();

		currentScrollTop = a;

		if (c < currentScrollTop && a > b + b) {
			header.addClass("is-hidden");
		} else if (c > currentScrollTop && !(a <= b)) {
			header.removeClass("is-hidden");
		}
		c = currentScrollTop;
	});
});


// BACK TO TOP

if ($('.back-to-top').length) {
    var scrollTrigger = 1200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
    });
}


// SCROLL

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});

$('a[href*="#"]').on('click', function(e) {
	e.preventDefault()

	$('html, body').animate(
	{
		scrollTop: $($(this).attr('href')).offset().top,
	},
	900,
	'linear'
	)
})