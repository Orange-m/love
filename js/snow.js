//沙箱
/*
*  author:杨威
   email:xx@qq.com
   说明:这是基于jQuery 库创建雪花
*/
(function($){
	$.fn.snow=function(options){
		//创建一个雪花div，&#10052这是代表雪花
		var $flake=$('<div id="flake"/>').css({
			'position':'absolute',
			'top':'50px'
		}).html('&#10052;'),
		//获取可视区域的宽高
		documentHeigth=$(document).height(),
		documentWidth=$(document).width(),
		defaults={
			minSize:10,
			maxSize:20,
			//500毫秒 下雪的速度
			newOn:500,
			flakeColor:"FFFFFF"
		},
		options=$.extend({},defaults,options);
		//计时器
		var interval=setInterval(function(){
			//起始位置
			var startPositionLeft=Math.random()*documentWidth-100,
			//透明度
			startOpacity=0.5+Math.random(),
			//字体大小
			sizeFlake=options.minSize+Math.random()*options.maxSize,
			//结束位置
			endPositionTop=documentHeigth-40,
			endPositionLeft=startPositionLeft-100+Math.random()*200,
			//持续时间
			durationFall=documentHeigth*10+Math.random()*5000;
			$flake.clone().appendTo('body').css({
				left:startPositionLeft,
				opacity:startOpacity,
				'font-size':sizeFlake,
				color:options.flakeColor
			}).animate({
				top:endPositionTop,
				left:endPositionLeft,
				opacity:0.2
			},
			durationFall,'linear',
			function(){
				$(this).remove()
			});
		},
		options.newOn);
	};
})(jQuery);