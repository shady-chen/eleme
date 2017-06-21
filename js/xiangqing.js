$(function(){
	//最上面的hover效果
	$('.header-hover').hover(function(){
		$(this).css({"background":"white"});
		$(this).children('.header-hover-hide').show();
	},function(){
		$(this).css({"background":""});
		$(this).children('.header-hover-hide').hide();
	})





	  // 右边工具
	  $('#tool>ul>li').hover(function(){
	  		var idx=$(this).index();
	  		$(this).css({"background":"red"});
	  		 $('#tool>ul>li').not($(this)).css({"background":""});
	  		 $('.tool-hide').eq(idx).show();
	  		 $('.tool-hide').not($('.tool-hide').eq(idx)).hide();
	  },function(){
	  		 $('#tool>ul>li').css({"background":""});
	  		  $('.tool-hide').hide();
	  })


	  $('.tool-footer>.username').hover(function(){
	  		var idx=$(this).index();
	  		$(this).css({"background":"blue"});
	  		 $('.tool-footer>.username').not($(this)).css({"background":""});
	  		 $('.username-hide').eq(idx).show();
	  		 $('.username-hide').not($('.username-hide').eq(idx)).hide();
	  },function(){
	  		 $('.tool-footer>.username').css({"background":""});
	  		  $('.username-hide').hide();
	  })


	  $('.toTop').click(function(){
	  	$('html,body').animate({scrollTop:"0px"},100);
	  })

	  // 放大镜
	  $('.shop-detail-main-left>ul>li').mouseenter(function(){
	  	var idx=$(this).index();
	  	$(this).css({'border':'2px solid red'});
	  	$('.shop-detail-main-left>ul>li').not($(this)).css({'border':'none'});
	  	$('.shop-img').attr({"src":"./img/xiangqing/"+idx+".jpg"});
	  	$('.morebig>img').attr({"src":"./img/xiangqing/"+idx+".jpg"});
	  })

	  // 小的放大镜的移动
	  $('.img-wrap').mouseenter(function(){
	  	$('.img-tool').show();
		$('.morebig').show();
	  	$(this).mousemove(function(e){
	  		// $('.img-tool').css({});
	  		var x=e.pageX-$(this).offset().left-$('.img-tool').width()/2;
	  		var y=e.pageY-$(this).offset().top-$('.img-tool').width()/2;
	  		if(x<0)
	  		{
	  			x=0;
	  		}
	  		if(x>=$(this).width()/2)
	  		{
	  			x=$(this).width()/2
	  		}
	  		if(y<0)
	  		{
	  			y=0
	  		}
	  		if(y>=$(this).width()/2)
	  		{
	  			y=$(this).width()/2
	  		}
	  		$('.img-tool').css({"left":x+"px"});
	  		$('.img-tool').css({"top":y+"px"});
	  		$('.morebig>img').css({"left":-420*(x/210)+'px'});
	  		$('.morebig>img').css({"top":-420*(y/210)+'px'});
	  		
	  		// console.log($('.img-tool').position().left);
	  		// console.log($('.img-tool').position().top);

	  	})
	  	
	  })


	  	  $('.img-wrap').mouseleave(function(){
	  	  	$('.img-tool').hide();
			$('.morebig').hide();
	  	  })


	  	  	$('.morebig').mousemove(function(){
	  	  		return false;
	  	  	})
	  	  	$('.morebig').mouseenter(function(){
	  	  		$('.img-tool').hide();
				$('.morebig').hide();
	  	  	})


	  	  $('.many>button').eq(0).click(function(){

	  	  	var val=parseInt($(this).next().val())
	  	  	if(val==1)
	  	  	{
	  	  		$(this).next().val(1)
	  	  	}
	  	  	else{
	  	  		$(this).next().val(val-1)
	  	  	}
	  	  	
	  	  })

	  	  $('.many>button').eq(1).click(function(){

	  	  	var val=parseInt($(this).prev().val())
	  	  	
	  	  		$(this).prev().val(val+1)
	  	  
	  	  	
	  	  })



	 
})


