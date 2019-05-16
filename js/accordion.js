accorInit('.newsWrap');
function accorInit(_sup) {
	var sup=$(_sup);
    var W=$(window).width();
	var children=sup.children().filter('.new');
	$.each(children,function() {
		$(this).click(function() {
				changeOpen($(this));
			});
	});
	function arr_l() {
		//dom移动
		console.log("arr_l");
		var prev=children.filter('.newOpen').removeClass('n1').addClass('n2');
		if (prev.attr('index')==1) {
			now=children.eq(children.length-1);
			toggleStyle(prev,now);
			now.addClass('n1');
			prev.next().removeClass('n2').addClass('n3');
			prev.next().next().removeClass('n3');
		}else if (prev.attr('index')==children.length) {
			now=prev.prev();
			now.addClass('n1');
			toggleStyle(prev,now);
			children.eq(0).removeClass('n2').addClass('n3');
			children.eq(1).removeClass('n3');
		}else if (prev.attr('index')==children.length-1) {
			now=prev.prev();
			now.addClass('n1');
			toggleStyle(prev,now);
			prev.next().removeClass('n2').addClass('n3');
			children.eq(0).removeClass('n3');
		}else{
			prev.next().removeClass('n2').addClass('n3');
			prev.next().next().removeClass('n3');
			var now=prev.prev();
			now.addClass('n1');
			toggleStyle(prev,now);
		}
	
	};
	function arr_r() {
		console.log("arr_r");
		//dom移动
			var prev=children.filter('.newOpen');
			prev.removeClass('n1');
		if (prev.attr('index')==children.length-2) {
			now=prev.next();
			now.addClass('n1');
			toggleStyle(prev,now);
			now.next().removeClass('n3').addClass('n2');
			children.eq(0).addClass('n3');
		}else if (prev.attr('index')==children.length) {
			now=children.eq(0);
			now.removeClass('n2').addClass('n1');
			now.next().removeClass('n3').addClass('n2');
			toggleStyle(prev,now);
			children.eq(2).addClass('n3');
		}else if (prev.attr('index')==children.length-1) {
			now=prev.next();
			now.addClass('n1');
			toggleStyle(prev,now);
			children.eq(0).removeClass('n3').addClass('n2');
			children.eq(1).addClass('n3');
		}else{
			var now=prev.next();
			now.removeClass('n2').addClass('n1');
			now.next().removeClass('n3').addClass('n2');
			now.next().next().addClass('n3');
			toggleStyle(prev,now);
		}
	};

	//改变样式
	function toggleStyle(prev,now) {
		var prevC=prev.children();
		var prevLC=prevC.eq(1).children();
		var nowC=now.children();
		var nowLC=nowC.eq(1).children();
		prev.removeClass('newOpen');
		prevC.eq(0).LizToggleOne('newImgOpen','newImg');
		prevC.eq(1).LizToggleOne('newTextOpen','newText');
		prevLC.eq(0).LizToggleOne('newTitleOpen','newTitle');
		prevLC.eq(1).LizToggleOne('newDataOpen','newData');
		prevLC.eq(2).LizToggleOne('block','none');

		now.addClass('newOpen');
		nowC.eq(0).LizToggleOne('newImg','newImgOpen');
		nowC.eq(1).LizToggleOne('newText','newTextOpen');
		nowLC.eq(0).LizToggleOne('newTitle','newTitleOpen');
		nowLC.eq(1).LizToggleOne('newData','newDataOpen');
		nowLC.eq(2).LizToggleOne('none','block'); 
	};
	//直接点击小图产生的dom移动
	function changeOpen(obj) {
		 var _prev=children.filter('.newOpen');
		 var _now=obj;
		 var _prevIndex=parseInt(_prev.attr('index'));
		 var _nowIndex=parseInt(_now.attr('index'));
		 if (_nowIndex-_prevIndex==1) {
		 	arr_r();
		 }else if (_nowIndex-_prevIndex==2) {
		 	arr_r();
		 	arr_r();
		 }else if (_nowIndex-_prevIndex==-1) {
		 	arr_l();
		 }else if (_nowIndex-_prevIndex==-2) {
		 	arr_l();
		 	arr_l();
		 }else if (_nowIndex-_prevIndex==0) {
		 	return;
		 }
	};

	//拓展$.prototype
	$.fn.extend({
		LizToggleOne:function(str1,str2) {
			if ($(this).hasClass(str1)) {
				$(this).removeClass(str1).addClass(str2);
			}
		}
	});
}