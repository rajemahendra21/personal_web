//seting
jQuery(window).load(function(){resizeImg();works_resize();
$("#MIX").mixitup({effects:["fade"]});
$("#content_2").mCustomScrollbar({autoHideScrollbar:!1,theme:"light-thin",callbacks:{whileScrolling:function(){sMove();
WhileScrolling()}}});
$("#content_1").mCustomScrollbar({autoHideScrollbar:!0,theme:"light-thin"});
$(window).resize(function(){resizeImg();works_resize()});
$(".CLOSE_BTN").click();AS()
});
/*$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
	alert('hi');
	works_resize();
    WhileScrolling();
$("#MIX").mixitup({effects:["fade"]});
$("#content_2").mCustomScrollbar({
	autoHideScrollbar:!1,theme:"light-thin",callbacks:{
		whileScrolling:function(){sMove();
		WhileScrolling()
		}}
});
 }
});*/