var $tel=$('.ff .tel');
var $em=$('.ff .em');
var $phone=$("form .phone");
var $emali=$("form .emali");
var $telinput=$('#tel'); 
var $yzminput=$('.phone .yzm input');
var $telinput2=$('#dlmm'); 
var $yzminput2=$('.two .yzm input');
var $yzmspan=$('.yzm span');
var $ts1=$('.phone .tel .ts1');
var $ts2=$('.phone .yzm .ts1'); 
var $ts3=$('.two .tel .ts1');
var $ts4=$('.two .yzm .ts1'); 
var $dianji=$('.one .dianji');
var $dianji2=$('.two .dianji');
var $one=$('form .one');
var $two=$('form .two');
var $three=$('form .three');
var $zc2=$('.content .zc2');
var $zc3=$('.content .zc3');
$tel.on('click',function(){
	$phone.show();
	$emali.hide();
})
$em.on('click',function(){
	$phone.hide();
	$emali.show();
})
$(function(){
	var bstop=true;//不通过
	var regUser=/^1[3|5|7|8]\d{9}$/;
$telinput.on('blur',function(){
	var usename=$(this).val();
	if(usename!=''){
		if(regUser.test(usename)){
			$.ajax({
				type:'post',
				url:'reg.php',
				data:{
					name:usename
				},
				success:function(data){
					if(!data){
						$ts1.html='手机格式正确';
						bstop=false;
					}else{
						$ts1.html('该用户名已经存在');
						bstop=true;
					}
				  }
				})
		   }else{
		   	   $ts1.HTML='手机格式不正确';
		   	   bstop=true;
		   }
	    }else{
			    $ts1[0].innerHTML='请输入手机号';
			    bstop=true;
			   }
		});
		$dianji.on('click',function(){
			if(($ts1[0].innerHTML=='手机格式正确')&&($ts2[0].innerHTML=='验证码正确')){
				$two.show();
				$one.hide();
				$three.hide();
				$zc2.css("background-image","url(../register/images/t1.png)");
			}
			else if(bstop){
				return false;//阻止按钮跳转。
		 	}
		});
})
 function getrandom(min,max){
	return Math.ceil(Math.random()*max-1+min);
	}			
$yzmspan.on('click',function(){
	    var str='';
	    var arr=[];
	    $yzmspan.css('background','rgb('+getrandom(0,255)+','+getrandom(0,255)+','+getrandom(0,255)+')');
		for(var j=65;j<=90;j++){//97是a;122是z     65是A;90是Z;
				arr.push(String.fromCharCode(j));
	     }
		for(var i=0;i<4;i++){
				var shu=parseInt(Math.random()*arr.length);
				str+=arr[shu];
		}	
			$yzmspan[0].innerHTML=str;
})
$yzminput.on('blur',function(){
	var yzmvalue=$yzminput.val();
	if(yzmvalue!=''){
			if(yzmvalue==$yzmspan[0].innerHTML){
				$ts2[0].innerHTML='验证码正确';
			}else{
				$ts2[0].innerHTML='验证码错误';
			}
	}
	else{
		$ts2[0].innerHTML='验证码不能为空';
	}
})
$(function(){
	var regnum=/\d{6}/;//单数字
	var regchar=/[a-zA-Z]+/;//字母
	var regother=/[\W\_]+/;//非字母数字下划线 下划线
$telinput2.on('blur',function(){
	var password=$telinput2.val();
	if(password!=''){
	  if((password.length>=6&&regnum.test(password))&&(regchar.test(password)||regother.test(password))){
	  	$.ajax({
				type:'post',
				url:'reg.php',
				data:{
					name:password
				},
				success:function(data){
					if(!data){
						$ts3[0].innerHTML='密码要求符合 ';
						bstop=false;
					}else{
						$ts1.html('该密码已存在');
						bstop=true;
					}
				  }
			 });
			}else{
				$ts3[0].innerHTML='密码不正确 ';	
			}
		}else{
			$ts3[0].innerHTML='密码不能为空';
		}
	});
	$dianji2.on('click',function(){
		if(($ts3[0].innerHTML=='密码要求符合 ')&&($ts4[0].innerHTML=='密码一致')){
			$three.show();
			$two.hide();
			$zc3.css("background-image","url(../register/images/t3.png)");
	}else{
		return false;
	}
	});
})
$yzminput2.on('blur',function(){
	var mm=$yzminput2.val();
	if(mm!=''){
		if($telinput2.val()==mm){
			$ts4[0].innerHTML='密码一致';
		}else{
			$ts4[0].innerHTML='密码不一致';
		 }
	}else{
		  $ts4[0].innerHTML='请再次输入密码';	
		}
})
