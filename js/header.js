$(function(){
	//最上面的hover效果
	$('.header-hover').hover(function(){
		$(this).css({"background":"white"});
		$(this).children('.header-hover-hide').show();
	},function(){
		$(this).css({"background":""});
		$(this).children('.header-hover-hide').hide();
	})


	// 轮播图
	var i=0;
	function autoPlay(){
		timer=setInterval(function(){
			if(i>=$('.autoplay>ul>li').length)
			{
				i=0;
			}
			$('.autoplay>ul>li').hide();
			$('.autoplay>ul>li').eq(i).show();
			$('.autoplay>.btns>.btn>p').css({'background':'white'});
			$('.autoplay>.btns>.btn>p').eq(i).css({'background':'red'});

			i++
		},3500)
	}
	autoPlay();

	$('.autoplay>.btns>.btn>p').mouseenter(function(){
		clearInterval(timer);
		$('.autoplay>ul>li').stop();
		$('.autoplay>ul>li').fadeOut(300);
		$('.autoplay>ul>li').eq($(this).index()).fadeIn(500);
		$('.autoplay>.btns>.btn>p').css({'background':'white'});
		$(this).css({'background':'red'});
		i=$(this).index();

	})

	$('.autoplay>.btns>.btn>p').mouseleave(function(){
		autoPlay();

	})
	// 抢购 左边鼠标移入事件
	$('.qg-left>ul>li').mouseenter(function(){
		var idx=$(this).index();
		$(this).addClass('active');
		$('.qg-left>ul>li').not($(this)).removeClass('active');
		$('.qg-left-hide').eq(idx).stop().show(100);
		$('.qg-left-hide').not($('.qg-left-hide').eq(idx)).stop().hide(100);
	})
	// 抢购 右边鼠标移入事件
	$('#qg-right>li').mouseenter(function(){
		var idx=$(this).index();
		$(this).css({"border-top":"2px solid red","background":"white"})
		$('#qg-right>li').not($(this)).css({"border-top":"2px solid #ccc","background":"#f0f0f0"})
		$('.qg-right-hide').eq(idx).show();
		$('.qg-right-hide').not($('.qg-right-hide').eq(idx)).hide();
	})
	// 抢购 右边边鼠标移入事件,阻止事件冒泡
	$('.qg-right-hide').mouseenter(function(e){
			return false;
	})

	// 抢购 轮播图

		bigBox('.qg-right-img-first>img','.qg-right-img-first','.qg-right-img-first-btn>p');
	
	    bigBox('.qg-right-img-second>a>img','.qg-right-img-second','.qg-right-img-second-btn>p');
	

	
	// 显示抢购
	$('.xsyh-btn>p').click(function(){
		$('.xsyh-img-box').stop();
		var idx=$(this).index();
		$('.xsyh-img-box').animate({'left':-idx*1200+'px'},500,function(){

		});
		$(this).css({'background':'red'});
		$('.xsyh-btn>p').not($(this)).css({'background':"#ccc"});
	})
	

	//抢购倒计时
	function sj()
	{	
		var mytime=0;
		var m=0;
		arr=[]
		for(var i=0;i<$('.hour').length;i++)
		{
			 m=1*60*60*10+Math.floor(Math.random()*10000);
			$('.hour').parent().eq(i).data({'time':m});
			arr[i]=$('.hour').parent().eq(i).data('time');
			 // console.log($('.hour').eq(i).data('time')%(1*60*60));
			 // console.log(arr[i]);
		}

		setInterval(function(){
			for(var i=0;i<$('.hour').length;i++)
			{
			 $('.hour').parent().eq(i).data({'time':arr[i]})
			 arr[i]-=1;
			}
			for(var i=0;i<$('.hour').length;i++)
			{
				$('.hour').eq(i).html(Math.floor(arr[i]/(1*60*60)))
			}
			for(var i=0;i<$('.hour').length;i++)
			{
				$('.minutes').eq(i).html(Math.floor(arr[i]%(1*60*60)/60))
			}
			for(var i=0;i<$('.hour').length;i++)
			{
				$('.second').eq(i).html(Math.floor(arr[i]%60))
			}
			

			
		},1000)
	}
	sj();		
	// 1F白酒馆左边轮播图
	bigBox('.one-floor-list-left>ul>li','.one-floor-list-left>ul','.one-floor-list-left-btn>p');


	//1F右下角的hover效果
	 $('.one-floor-list-footer-right-top:first>ul>li').mouseenter(function(){
	 	var idx=$(this).index();
	 	$(this).children().css({"color":"red"});
	 	$('.one-floor-list-footer-right-top:first>ul>li').not($(this)).children().css({"color":"#ccc"});
	 	  $('.one-floor-list-footer-right-list:first>.linhuifen-i-love-u-last-time-to-say-it-1f').hide();
	 	 $('.one-floor-list-footer-right-list:first>.linhuifen-i-love-u-last-time-to-say-it-1f').eq(idx).show();
	 })
	

	 //2F轮播图
	 bigBox('.two-floor-list-left>ul>li','.two-floor-list-left>ul','.two-floor-list-left-btn>p');


	 $('.one-floor-list-footer-right-top:eq(1)>ul>li').mouseenter(function(){
	 	var idx=$(this).index();
	 	$(this).children().css({"color":"red"});
	 	$('.one-floor-list-footer-right-top:eq(1)>ul>li').not($(this)).children().css({"color":"#ccc"});
	 	 $('.one-floor-list-footer-right-list:eq(1)>.linhuifen-i-love-u-last-time-to-say-it').hide();
	 	 $('.one-floor-list-footer-right-list:eq(1)>.linhuifen-i-love-u-last-time-to-say-it').eq(idx).show();
	 })

	 //3F
	  bigBox('.three-floor-list-left>ul>li','.three-floor-list-left>ul','.three-floor-list-left-btn>p');

	 // 4F
	   bigBox('.four-floor-list-left>ul>li','.four-floor-list-left>ul','.four-floor-list-left-btn>p');

	 //5F 
	 bigBox('.five-floor-list-left>ul>li','.five-floor-list-left>ul','.five-floor-list-left-btn>p');




	 //推荐开始
	 $('.tuijian-top>ul>li').mouseenter(function(){
	 	 // $('.tuijian-store-wrap').stop();
	 	if($(this).index()!=0)
	 	{
	 		$('.pre,.next').hide();
	 	}
	 	else
	 	{
	 	 $('.pre,.next').show();
	 	}
	 	$('.slide-div').stop();
	 	$('.slide-div').animate({'left':$(this).index()*$(this).width()+'px'},300)
	 	// $('tuijian-store>ul>li>img').animate({'left':-$('tuijian-store>ul>li').width()+'px'},200);
	 	$(this).css({'color':'red'});
	 	 $('.tuijian-top>ul>li').not($(this)).css({'color':'gray'});
	 	  $('.tuijian-store-wrap').css({'left':'0px'}).stop().fadeOut(100);
	 	  $('.tuijian-store-wrap').eq($(this).index()).stop().fadeIn(100);
	 })
	
	 $('.tuijian-store-wrap li').mouseenter(function(){ 	
	 	$(this).children('img').animate({'left':-100+'px'},400);
	 	$(this).mouseleave(function(){
	 		 $(this).children('img').stop();
	 		$(this).children('img').animate({'left':'0px'},300);
	 	})
	 })

	 $('.tuijian>.pre').click(function(){
	 	if($('.tuijian-store-wrap').css('left')=="-1200px"){
	 		$('.tuijian-store-wrap').animate({'left':'0px'},500)
	 	}
	 })
	 $('.tuijian>.next').click(function(){
	 	if($('.tuijian-store-wrap').css('left')=="0px"){
	 		$('.tuijian-store-wrap').animate({'left':'-1200px'},500)
	 	}
	 })



	  //推荐结束


	  // 二级菜单
	  $(".nav-list>ul>li").hover(function(){
	  	    var idx=$(this).index();
	  		$(this).css({'border-left':"3px solid red"});
	  		$(".nav-list>ul>li").not($(this)).css({'border-left':"none"});
	  		$('.nav-second-menu').eq(idx).show();
	  		$('.nav-second-menu').not($('.nav-second-menu').eq(idx)).hide();
	  },function(){
	  	$(".nav-list>ul>li").css({'border-left':""});
	  	$('.nav-second-menu').hide();

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





	  // 滚动监听事件
	  var gd=null;
	  $(window).scroll(function(){
	  	if($(window).scrollTop()>$('#of').offset().top-400)
	  	{
	  		$('#left').stop().show(200);
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		$('#left>ul>li').eq(0).css({"background":"red"})
	  		gd=0;
	  	}
	  	else{
	  		$('#left').stop().hide(200);
	  	}
	
	   if($(window).scrollTop()>$('#twof').offset().top-400)
	  	{
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		$('#left>ul>li').eq(1).css({"background":"yellow"})
	  		gd=1;
	  	}
	  if($(window).scrollTop()>$('#tf').offset().top-400)
	  	{
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		$('#left>ul>li').eq(2).css({"background":"blue"})
	  		gd=2;
	  	}
	  if($(window).scrollTop()>$('#four').offset().top-400)
	  	{
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		$('#left>ul>li').eq(3).css({"background":"pink"})
	  		gd=3;
	  	}
	  if($(window).scrollTop()>$('#fivef').offset().top-400)
	  	{
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		$('#left>ul>li').eq(4).css({"background":"purple"})
	  		gd=4;
	  	}
	  	 if($(window).scrollTop()>$('#fivef').offset().top+400)
	  	{
	  		$('#left>ul>li').css({"background":"#ccc"})
	  		
	  	}
	  })

	  // left
	 $('#left>ul>li').not($('#left>ul>li').eq(5)).hover(function(){
	 	var idx=$(this).index();
	 	$('#left>ul>li').animate({"width":"40px"},1);
	 	$('#left>ul>li').css({"background":"#ccc"});
	 	 $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(0).html('1F')
	 	 $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(1).html('2F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(2).html('3F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(3).html('4F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(4).html('5F')
	 	$('#left>ul>li').stop();	
	 	$(this).animate({"width":"110px"},300);
	 	switch (idx) {
	 		case 0:
	 			$(this).html('白酒馆');
	 			$(this).css({"background":"red"})
	 			break;
	 		case 1:
	 			$(this).html('葡萄酒馆');
	 			$(this).css({"background":"yellow"})
	 			break;
	 		case 2:
	 			$(this).html('洋酒馆')
	 			$(this).css({"background":"blue"})
	 			break;
	 		case 3:
	 			$(this).html('养生酒/啤酒/黄酒')
	 			$(this).css({"background":"pink"})
	 			break;	
	 		default:
	 			$(this).html('食品')
	 			$(this).css({"background":"purple"})
	 			break;
	 	}
	 },function(){
	 	$('#left>ul>li').stop();
	 	$('#left>ul>li').animate({"width":"40px"},100);
	 	$('#left>ul>li').css({"background":"#ccc"});
	 	 $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(0).html('1F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(1).html('2F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(2).html('3F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(3).html('4F')
	 	  $('#left>ul>li').not($('#left>ul>li').eq(5)).eq(4).html('5F')
	 	  switch (gd) {
	 	  	case 0:
	 	  		$('#left>ul>li').not($('#left>ul>li').eq(5)).eq(0).css({"background":"red"})	
	 	  		  
	 	  		break;		
	 	  	case 1:
	 	  	    
	 	  	    	$('#left>ul>li').not($('#left>ul>li').eq(5)).eq(1).css({"background":"yellow"})	
	  	
	 	  		break;
	 	  	case 2:
	 	  		$('#left>ul>li').not($('#left>ul>li').eq(5)).eq(2).css({"background":"blue"})
	 	  		break;
	 	  	case 3:
	 	  		$('#left>ul>li').not($('#left>ul>li').eq(5)).eq(3).css({"background":"pink"})
	 	  		break;
	 	  	case 4:
	 	  		$('#left>ul>li').not($('#left>ul>li').eq(5)).eq(4).css({"background":"purple"})
	 	  		break;	
	 	  	
	 	  }

	 })



	 // left of clicking
	 $('#left>ul>li').click(function(){
	 	var idx=$(this).index();
	 	$("html,body").stop();
	 	switch (idx) {
	 		case 0:
	 			$("html,body").animate({scrollTop:$('#of').offset().top-399},200);
	 			break;
	 		case 1:
	 			$("html,body").animate({scrollTop:$('#twof').offset().top-399},200);
	 			break;
	 		case 2:
	 			$("html,body").animate({scrollTop:$('#tf').offset().top-399},200);
	 			break;
	 		case 3:
	 			$("html,body").animate({scrollTop:$('#four').offset().top-399},200);
	 			break;
	 		case 4:
	 			$("html,body").animate({scrollTop:$('#fivef').offset().top-399},200);
	 			break;			
	 		default:
	 			$("html,body").animate({scrollTop:0},400);
	 			break;
	 	}
	 	
	 })
})



