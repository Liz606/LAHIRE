
$.fn.newSlider = function(){
	var $thisChildren=$(this).children(),
		arr_r=$thisChildren.eq(2),
		arr_l=$thisChildren.eq(1),
		slider=$thisChildren.eq(0);
		
	arr_r.click(function(){
		arr_next();
	});
	arr_l.click(function(){
		arr_prep();
	});	
	function arr_next(){
		var sliderLi=slider.children();
		var currtNode=sliderLi.eq(0).clone();
		sliderLi.eq(0).remove();
		slider.append(currtNode);
	}
	function arr_prep(){
		var sliderLi=slider.children();
		var currtNode=sliderLi.eq(sliderLi.length-1).clone();
		sliderLi.eq(sliderLi.length-1).remove();
		slider.prepend(currtNode);
	}
};
$('.newPic').each(function (){
	$(this).newSlider();
})