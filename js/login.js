
$(function(){

	// 用户名正则
	var user=/^[a-z0-9_-]{3,16}$/;
	// 密码正则
	var psd=/^[a-z0-9_-]{6,18}$/;
	// 验证码
	var x,y,z,c;
	function yz(){
		 x=Math.ceil(Math.random()*9);
		 y=Math.ceil(Math.random()*9);
		 z=Math.ceil(Math.random()*9);
		 c=Math.ceil(Math.random()*9);
		$('input[name=num-re]').val(c*1000+x*100+y*10+z);
	}
	yz();

	// 所有聚焦事件
	$('input').focus(function(){
		$(this).attr({'placeholder':""});
		if($(this).attr('type')=="password"){
			$('.password-test').hide();
		}
		if($(this).attr('name')=="username"){
			$('.username-test').hide();
		}
		if($(this).attr('name')=="num"){
			$('.num-test').hide();
		}
	})

	// 验证码失焦事件
	$('input[name=num]').blur(function(){
		var val=parseInt($(this).val());
		 var q=Math.floor(val/1000);
		 var b=Math.floor((val%1000)/100);
		 var s=Math.floor((val-(q*1000+b*100))/10);
		 var g=val-q*1000-b*100-s*10;
		if(q==c&&b==x&&s==y&&g==z)
		{
			$(this).css({"outline":"none"});
			$(this).data({'x':1})
		}
		else
		{
			$(this).css({"outline":"2px pink solid"});
			$('.num-test').show();
			$(this).data({'x':0})
		}
	})
	// 用户失焦事件
	$('input[name=username]').blur(function(){
		var val=$(this).val();
		if(user.test(val))
		{
			$(this).css({"outline":"none"});
			$(this).data({'x':1})
		}
		else
		{
			$(this).css({"outline":"2px pink solid"});
			$('.username-test').show();
			$(this).data({'x':0})
		}
	})
	// 密码失焦事件
	$('input[type=password]').blur(function(){
		var val=$(this).val();
		if(psd.test(val))
		{
			$(this).css({"outline":"none"});
			$(this).data({'x':1})
		}
		else
		{
			$(this).css({"outline":"2px pink solid"});
			$('.password-test').show();
			$(this).data({'x':0})
		}
	})

	
	









	// 提交事件
	$('input[type=submit]').click(function()
		{
			var tal=0;
			$('.test-input').blur();
			// class="test-input"
			$('.test-input').each(function(){
				tal+=$(this).data('x');
			})
			if(tal!=3)
			{
				return false;
			}
			else 
			{
				return true;
			
			}
			
			
		})
})


		