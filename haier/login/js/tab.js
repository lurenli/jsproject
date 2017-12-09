
	var $p1=$('.youxiang p');
	var $p2=$('.mima p');
	var $p3=$('.shoujihao p');
	var $p4=$('.shoujimima p');
	var $input3=$('.shoujihao input');
	var $input4=$('.shoujimima input');
	var $pt=$(".pt1");
	var $sj=$(".pt2");
	var $yi=$(".yanzhen .yi");
	var $er=$(".yanzhen .er");
	$pt.on('click',function(){
		$yi.show();
		$er.hide();
		$sj.css('border-bottom','2px solid #e4e4e4');
		$pt.css('border-bottom','2px solid #32beff');
	})
	$sj.on('click',function(){
		$yi.hide();
		$er.show();
		$sj.css('border-bottom','2px solid #32beff');
		$pt.css('border-bottom','2px solid #e4e4e4');
		
	})
	$input3.on('focus',function(){
		this.placeholder='';
	})
	$input3.on('blur',function(){
		$p3[0].innerHTML='请输入手机号';
	})
	$input4.on('focus',function(){
		this.placeholder='';
	})
	$input4.on('blur',function(){
		$p4[0].innerHTML='验证码不能为空！';
	});
	var $at=$('#all-top');
		$at.on('click',function(){		
			$('html,body').animate({
	         	  scrollTop:0	
			})
		})
