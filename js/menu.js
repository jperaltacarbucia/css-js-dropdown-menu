$(document).ready(function(){
	
	$('.drop').mouseenter(function(){
		$('.drop ul').animate({height:'60px'},'slow');
		$('.drop ul').css('border','1px solid #333');
		$('.drop ul li').css('display','block');
	}).mouseleave(function(){
		$('.drop ul').animate({height:'0px'},'slow');
		$('.drop ul').css('border','0px solid #333');
		$('.drop ul li').css('display','none');


	});


});