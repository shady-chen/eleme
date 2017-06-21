function  bigBox(tupian,rongqi,btn){
		var timer=null;
 		var i=1;
 		var timer_st=null;
 		function autoPlay(tupian,rongqi,btn)
 		{
 			clearTimeout(timer_st);
 			timer=setInterval(function(){
 			if(i>=$(tupian).length)
 			{
 				i=0;
 			}
 			if(i!=$(tupian).length&& i!=0)
 			{
				$(rongqi).animate({'left':-$(tupian).eq(0).width()*i+'px'},500);
				
			}
			else
			{
				$(rongqi).css('left','0px');
				$(rongqi).animate({'left':-$(tupian).eq(0).width()+'px'},500);
				i++;
			} 
 			i++;
 			if(i!=$(tupian).length)
 			{
 				 $(btn).eq(i-1).css({'background':'red'});
				 $(btn).not($(btn).eq(i-1)).css({'background':"white"});
			}
			else{
				 $(btn).eq(0).css({'background':'red'});
 			 	$(btn).not($(btn).eq(0)).css({'background':"white"});
			}
 			
 			},2000)
 		}
 		autoPlay(tupian,rongqi,btn);
 		$(btn).click(function(){
 			$(tupian).stop();
 			clearInterval(timer);
 			clearTimeout(timer_st);
 			console.log('这是index'+$(this).index());
 			$(rongqi).animate({'left':-$(tupian).eq(0).width()*$(this).index()+'px'},300);
 			$(this).css({'background':'red'});
 			$(btn).not($(this)).css({'background':"white"});
 			i=$(this).index();
 			timer_st=setTimeout(function(){
 			 	autoPlay(tupian,rongqi,btn);
 			 },2000);
 		})
};


