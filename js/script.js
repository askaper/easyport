/* Script */

$(document).ready(function() {

	$('body').jpreLoader({
		autoClose: true,
		showSplash: true,
		loaderVPos: "50%"
	});

	/* Disable 300ms delay*/

//FastClick.attach(document.body);

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
