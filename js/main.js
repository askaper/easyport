/* Typekit */

try{Typekit.load();}catch(e){}

$(function() {

	$('.twitter-clone').click(function() {
		vex.dialog.alert({
			unsafeMessage: '<h2>Twitter Clone</h2>' + '<img class="vex-images" src="img/imac-twitter-clone.png">' +
				'A working Twitter clone I developed during my time at RockIt Bootcamp putting JavaScript, jQuery, and templating skills (Handlebars.js) into action.' +
				'<a class="vex-url" href="twitter/index.html">Live demo</a>' +
				'<a class="vex-url" href="https://github.com/askaper/milestone3/tree/master/twitter"><i class="fa fa-github bottom-icons" aria-hidden="true"></i></a>'
		})
	})

	$('.puppy-love').click(function() {
		vex.dialog.alert({
			unsafeMessage: '<h2>Puppy Love</h2>' + '<img class="vex-images" src="img/puppy-love-screenshot.png">' +
			'An exercise in creating a functional page from a static image using symantic HTML and CSS best practices with Chrome Development Tools' +
			'<a class="vex-url" href="plove/index.html">Live Demo</a>' +
			'<a class="vex-url" href="https://github.com/askaper/milestone3/tree/master/plove"><i class="fa fa-github bottom-icons" aria-hidden="true"></i></a>'
		})
	})

	$('.catalog').click(function() {
		vex.dialog.alert({
			unsafeMessage: '<h2>Catalog Redesign</h2>' + '<img class="vex-images" src="img/hlp-catalog.png">' +
			'A redesign of Halogen Lighting&#39;s 2012 catalog where I made contributions towards design, copy, and photography using Adobe Creative Suite (InDesign, Illustrator, and Photoshop)' +
			'<a class="vex-url" href="pdf/2012-catalog.pdf"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>'
		})
	})

	$('.windrow').click(function() {
		vex.dialog.alert({
			unsafeMessage: '<h2>First Website Design</h2>' + '<img class="vex-images" src="img/windrow.png">' +
			'The first client website I have designed and developed back in 2013 with limited skills. (HTML, CSS, Javascript, PHP, Bootstrap)' +
			'<a class="vex-url" href="http://www.windrowsolutions.com">Live Demo</a>'
		})
	})

	$('body').jpreLoader({
		autoClose: true,
		showSplash: true,
		loaderVPos: "50%"
	});

/* Main Menu */

$("#trigger-overlay").click(function(e){
	$("#menu").toggleClass('show-menu');
	$("#trigger-overlay").toggleClass('showx');
	e.preventDefault();
});

/* Stiky Header */

$(window).scroll(function(){
	if($(window).scrollTop() <= 20){
		$('header').removeClass('scrollIn');
	}else{
		$('header').addClass('scrollIn');
	}

	if($("header.homepage").length !== 0){

		if($(window).scrollTop() <= 310){
			$('header').removeClass('scrollIn2');
		}else{

			$('header').addClass('scrollIn2');
		}
	}

});

/* Sticky Project details */
if($(".project-details").length !== 0){
		// Basic Options Defined
		$('.details-sticky').sticky({
			'offset' : 100,
			'mode'   : 'animate'
		});
	}
});
