$(document).ready(function(){
	$.ajax({
				url:'../../haier/index/php/haier.php',
				dataType:'json'
		 // 精品推荐右边的拼接
			}).done(function(data){
				var right=$('#ronyao-right');
				var html='';
				html+='<ul>';
				for(var i=0; i<6;i++){
					html+='<li class="item"><a href="javascript:;" class="tupian"><img src="'+data[i].url+'"><a href="javascript:;" class="ds">'+data[i].title+'</a><span class="jiaqian">'+data[i].price+'<span></li>';
				}
				html+='</ul>';
				right.html(html);
	//二级菜单
	}).done(function(){
		var $list=$('.list ul').children('li');
		var $er=$('.erji');
		var time=null;
		var that=null;
		$list.hover(function(){
			$er.show();
		    that=$(this);
			that.addClass('hover').siblings().removeClass('hover');
			that.find('a').addClass('active').parent().siblings().find('a').removeClass('active');
			
		},function(){
			 	$er.hide();
			 	that.removeClass('hover');
			 	that.children('a').removeClass('active');
		});
		
		$er.hover(function(){
			$er.show();
			that.addClass('hover').siblings().removeClass('hover');
			that.find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		
		},function(){
				$er.hide();
				that.removeClass('hover');
				that.children('a').removeClass('active');
		})
		 //    轮播js
	}).done(function(data){
				var scroll=document.getElementById('scroll');
				var lunbo=''
				for(var i=6;i<12;i++){
					lunbo+='<img src="'+data[i].url+'">';
				}
				scroll.innerHTML=lunbo;
	}).done(function(){ 
		
		var $btns=$('#main .btn span');//下面的span
    	var $imgs=$('#scroll img');//轮播图片
    	var $index=0;//当前的索引
    	var $qindex=0;//前一个索引
    	$btns.on('click',function(){
    		$index=$(this).index();
    		$btns.eq($index).addClass('hover').siblings($btns).removeClass('hover');
    		yidong();
    		$qindex = $index;
    	})
    	$('.left').hover(function(){
    		$('.prev').show();
    		$('.next').show();
          },function(){
    		$('.prev').hide();
    		$('.next').hide();
    	})
    	$('.left .next').click(function(){//下一张
    		$index++;//索引加加
    		if($index>5){
    			$index=0;
    			$qindex=5;
    		}
    		yidong();
    		$qindex=$index;//当前索引	
    	})
    	$('.left .prev').click(function(){//前一张
    		$index--;
    		if($index<0){
    			$index=5;
                $qindex=0;
    		}
    		yidong();
    		$qindex=$index;
    	})
    	function yidong(){//运动函数
    		
    		$btns.eq($index).addClass('hover').siblings($btns).removeClass('hover');
    		if($index==0&&$qindex==5){//即6号图片时下一张的情况 当前索引就为0  前一索引就为5
    			$imgs.eq($qindex).animate({//前一图片往左边移
    				left:-952
    			});
    			$imgs.eq($index).css('left','952px').animate({
    				left:0
    			});
    		}else if($index==5&&$qindex==0){//即1号图片时下一张的情况 当前索引就为5  前一索引就为0
    			$imgs.eq($qindex).animate({//前一图片往右边移
    				left:952
    			});
    			$imgs.eq($index).css('left','-952px').animate({
    				left:0
    			});
    		}else if($index > $qindex){//当前索引大于前一索引时
    			$imgs.eq($qindex).animate({
    				left:-952
    			});
    			$imgs.eq($index).css('left','952px').animate({
    				left:0
    			});
    		}else if($index < $qindex){//当前索引小于前一索引时
    			$imgs.eq($qindex).animate({
    				left:952
    			});
    			$imgs.eq($index).css('left','-952px').animate({
    				left:0
    			});
    		}    		
    	}
    	 setInterval(function(){
    	 	$('.left .next').click();
    	 },3000);//1000为1秒钟
    	
    });
    
$.ajax({
		url:'../../haier/index/php/youping.php',
		dataType:'json'
    // 优品专辑 右边的拼接
	}).done(function(data){
		var yr=$('.cd .c-right');
		var yp='';
		yp+='<ol>'
		for(var i=0;i<8;i++){	
			yp+='<li class="c-li"><a href="#" class="dj"><span class="txt">'+data[i].title+'</span><span class="jiage">'+data[i].price+'</span><img src="'+data[i].url+'"></a></li>';
		}
		yp+='</ol>';
		yr.html(yp);
	
}).done(function(){
	var $LI=$('#youping').find('ul').children('li');
	var $CD=$('#youping .content .cd');
	var $num=0;
	$LI.on('mouseover',function(){
		$num=$(this).index();
		$CD.eq($num).show().siblings().hide();
		$(this).find('h4').addClass('hh').parent().parent().siblings().find('h4').removeClass('hh');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('i.hbj').css('background-position-y','-402px');
	})
	$LI.on('mouseout',function(){
		$(this).find('h4').addClass('hh').parent().parent().siblings().find('h4').removeClass('hh');
		$(this).find('i.hbj').css('background-position-y','-402px').parent().parent().siblings().find('i.qbj').css('background-position-y','-356px');
	})
})
$.ajax({
	url:'../../haier/index/php/shuo.php',
	dataType:'json'
}).done(function(data){
	var $oUL=$('#shuo').find('ul');
	var $shuo='';
	for(var i=0;i<4;i++){
		$shuo+='<li>'+
					'<a href="#" class="huo"><img src="'+data[i].url+'"></a>'+
					'<a class="link">'+
						'<div class="xh"><span>'+data[i].xh+'</span><i>'+data[i].price+'</i></div>'+
						'<p class="cy">'+data[i].title+'</p>'+
					'</a>'
					'<p class="rq"><span>2017-09-08</span></p>'+
			   '</li>'
		}
	$oUL.html($shuo);
})
$.ajax({
	url:'../../haier/index/php/foryou.php',
	dataType:'json'
	  // 为你推荐  右边的拼接
}).done(function(data){
	var $ul=$('#foryou').find('ul');
    var $foryou='';
    for(var i=0;i<10;i++){
    	$foryou+='<li>'+
					'<a href="#" class="syx">'+
						'<img src="'+data[i].url+'">'+
						'<p class="kw">'+data[i].title+'</p>'+
					'</a>'+
					'<p class="price"><span>'+data[i].price+'</span></p>'+
				'</li>';
    }
    $ul.html($foryou);
}).done(function(){
	$(window).on('scroll',function(){
         	var scrolltop=$(this).scrollTop();
         	if(scrolltop>=450){
         		$('#loutinav').show();
         	}else{
         		$('#loutinav').hide();
         	}
         
        $('#loutinav li').each(function(){
        	var $top= $('#louti .lt').eq($(this).index()).offset().top+200;
        	//console.log($top);
        	//给每个.louti 的offsettop+200(盒子的一大半)
        	//alert($(this).index());//索引
        	if($top>scrolltop){
        		 $('#loutinav li').removeClass('active');
        		 $('#loutinav li').eq($(this).index()).addClass('active');
        		 return false;
        		 //return false;执行一个就停一个
            //点击对应的楼梯将对应的内容块的值赋值给scrolltop
    		//赋值具有兼容问题：document.documentElement.scrollTop
    		//document.body.scrollTop
    		//animate() 方法执行 CSS 属性集的自定义动画
        	}
        });
        });
        
        //给左边的li添加点击事件
         $('#loutinav li').not('.last').on('click',function(){
         	//siblings() 获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。查找相同元素名字的
         	$(this).addClass('active').siblings('li').removeClass('active');
         	var $index=$(this).index();
         	var $sctop=$('#louti .lt').eq($index).offset().top;//索引所对应的对象的offsettop
         	$('html,body').animate({
         		scrollTop:$sctop
         	});
         });
         $('.last').on('click',function(){
         	$('html,body').animate({
         	  scrollTop:0	
         	})
         });
}).done(function(){
	//滑过购物车隐藏的布局
	var $block=$('#header .block');
	$block.on('click',function(){
		window.location.href="../../haier/cart/cart.html";
	 })
	//精品推荐右边的li的点击进入购物车
	var $ryLi=$('#ronyao-right').find('ul').children('li');
	$ryLi.on('click',function(){
		window.location.href="../../haier/cart/cart.html";
	})
	//搜索框的下拉列表
	var $search=$('#search');
	var $ol=$('.search-list');
	$search.on('focus',function(){
		this.placeholder='';
  	$ol.show();
		if($search.val()==''){
			$ol.show();
		}
		else{
			$ol.hide();
		}
	})
	$search.on('blur',function(){
		$ol.hide();
	})
	//回到顶部
	var $at=$('#all-top');
	$at.on('click',function(){		
		$('html,body').animate({
	         	  scrollTop:0	
			})
		})
})

});

	
