$(function(){
	// 验证码
	var x,y,z,c;
	function yz(){
		 x=Math.ceil(Math.random()*9);
		 y=Math.ceil(Math.random()*9);
		 z=Math.ceil(Math.random()*9);
		 c=Math.ceil(Math.random()*9);
		$('input[name=yzm-shuchu]').val(c*1000+x*100+y*10+z);
	}
	yz();


	// 用户名失焦事件
	// $('input[name=userphone]').blur(function(){
	// 	var val=$(this).val();
	// 	if(val){}
	// })
	$('form').submit(function(){
		var s=4;
		$('.mask').show();
		setInterval(function(){
			if(s==0)
			{
				location.assign('index.html');
			}
			$('#second').html(s);
			s--;
		},1000)
		return false;
	})



})