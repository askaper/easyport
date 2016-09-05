/* Typekit */

try{Typekit.load();}catch(e){}

$(function() {

	$('.hlp-work').click(function() {
		console.log('this should be working damnit!')
		vex.dialog.alert({
		unsafeMessage: '<h1>This is a test!</h1>'
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
