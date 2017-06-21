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

	  var pubu=0;
	  // 瀑布流开始
	  $(".next-page").click(function(){
	  	  // 插入五个li
	  	   $('#pubu').stop();
	  	  pubu++;
	  	  for(var i=0;i<4;i++){
	  	  	var x=Math.floor(Math.random()*16)
	  	  	var li="<li><img src='./img/pubu/"+x+".jpg'><div class='pubu-right'><p><a href=''>40°法国大班保罗VSOP白兰</a></p><p><span>￥79</span></p><p>245人已关注</p></div></li>"
	  	  	$('#pubu').append(li);
	  	  }
	  	  $('#pubu').animate({"top":-480*pubu+"px"});
	  })
	  $(".pre-page").click(function(){
	  	  if(pubu!=0)
	  	  {
	  	  	 $('#pubu').animate({"top":-480*(pubu-1)+"px"});
	  	  	  pubu--;
	  	  }
	  })



	  // 计时器
	  function jishiqi(){
	  		var m=1*60*60*10+Math.floor(Math.random()*10000);
	  		$('.jishiqi').data({"x":m});
	  		var t=0;
	  		t=$('.jishiqi').data("x");
	  		setInterval(function(){
	  			
	  			t--;
	  			$('.jishiqi').data({"x":t});
	  			$('.jishiqi').children('span').eq(0).html(Math.floor(t/3600)).css({'color':'red','font-size':'20px'})
	  			$('.jishiqi').children('span').eq(1).html(Math.floor(t%(1*60*60)/60)).css({'color':'red','font-size':'20px'})
	  			$('.jishiqi').children('span').eq(2).html(Math.floor(t%60)).css({'color':'red','font-size':'20px'})
	  		},1000)
	  }
	 jishiqi();

	 
})



