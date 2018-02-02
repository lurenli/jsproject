
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

var jscookie = {
    addCookie: function(key, value, day) {//添加cookie
        var date = new Date();
        date.setDate(date.getDate() + day); //保存时间(天)
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;     
    },
    getCookie: function(key) {
        var arr = decodeURI(document.cookie).split('; '); //数组的每一项都是一个键值对。
        for (var i = 0; i < arr.length; i++) {
            var newarr = arr[i].split('='); //将arr数组再次拆分成一个新的数组newarr
            if (newarr[0] == key) { //比较每个新数组的key值，输出value;
                return newarr[1];
            }
        }
    },
    delCookie: function(key) {//删除cookie
        jscookie.addCookie(key, 'value', -1);
    },
    tostring:function(obj) {//将要添加的cookie转换成字符串
	    var arr = [];
	    for (var i in obj) {
	        arr.push(i + '=' + obj[i]);
	    }
	    return arr.join('&');
	}
}

$('#username').on('focus',function(){
		this.placeholder='';
		
	})

$('#password').on('focus',function(){
		this.placeholder='';
	})

var bstop=false;
$('#dianji').on('click',function(){
	var $username=$('#username').val();
	var $password=$('#password').val();
	if($('#username').val()==''&& $('#password').val()==''){
		$('#error').html('请输入11位电话号码');
		$('#error2').html('请输入密码');
	}else if($('#username').val()==''){
		$('#error').html('请输入11位电话号码');
	}else if($('#password').val()==''){
		$('#error2').html('请输入密码');
	}else{
		$.ajax({
			type:'post',
			url:'http://127.0.0.1/haier/login/php/style.php',
			data:{//将用户名和密码传输给后端
				username:$username,
				password:$password
			},
			success:function(data){//请求成功，接收后端返回的值
				console.log(data)
			if(data==0){	
				alert('登录失败  用户名或密码不匹配，请重新输入');
			}else{
				alert('登录成功')
				jscookie.addCookie('username',$username,7);
				jscookie.addCookie('password',$password,7);
				setTimeout(function(){
					window.location.href='../../haier/index/index.html';
				},500)
				}
			}
		})
	}
});