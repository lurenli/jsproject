$(document).ready(function(){
	$.ajax(
	{
		url:'../../haier/detail/fdj.php',
		dataType:'json'
	}).done(function(data){
		var $spicimg=$('#spic');
		var $bfimg=$('#bf');
		var img1='';
		var img2='';
		img1+='<img src="'+data[0].url+'" style="width:380px" id="sfimg">';
		$spicimg.prepend(img1);
		img2+='<img src="'+data[0].url+'"  id="bfimg">';
		$bfimg.prepend(img2);
		var html='';
		var $UL=$('#list ul');
		for(var i=0;i<10;i ++){
			html+='<li class="item"><img src="'+data[i].url+'"></li>';
		}
		$UL.html(html);
		
	}).done(function(){

			var $oBox=$('#box');//盒子
			var $spic=$('#spic');//小图
			var $sfimg=$('#spic img');//下面小图的图片
			var $sf=$('#sf');//小放
			var $bf=$('#bf');//大放
			var $bfimg=$('#bfimg');//大图
			var $Left=$('#left');//左边按钮
			var $Right=$('#right');//右边按钮
			var $List=$('#list');
			var $oUl=$('#list ul');
			var $oLi=$oUl.children('li');
			var $oLiimg=$oLi.children('img')
			$oUl.width=$oLi[0].offsetWidth*$oLi.length+'px';//ul总长
			$spic.on('mouseover',function(){
				$sf.css('visibility','visible');
				$bf.css('visibility','visible');
				//小的放大镜的宽和高
				//小放：小图=大放：大图
				var $w=($bf[0].offsetWidth)*($spic[0].offsetWidth)/$bfimg[0].offsetWidth;
				var $h=($bf[0].offsetHeight)*($spic[0].offsetHeight)/$bfimg[0].offsetHeight;
				$sf.width($w+'px');
			    $sf.height($h+'px');
			    //alert($w);
			    //比例 ：大的放大镜除与小的放大镜
			    var $bili=($bf[0].offsetWidth-2)/$sf[0].offsetWidth;
			    $sf.on('mousemove',function(ev){
			    	//console.log($oBox.offset().top);244
			    	//console.log($oBox[0].offsetTop)  0
			    	var $ev=ev||window.event;
			    	//鼠标的位置    减号  是让鼠标在图片的中间
			    	var x=$ev.pageX-$w/2-$oBox.offset().left;
			    	var y=$ev.pageY-$h/2-$oBox.offset().top;
			    	if(x>=$spic[0].offsetWidth-$sf[0].offsetWidth-2){
			    		x=$spic[0].offsetWidth-$sf[0].offsetWidth-2;
			    	}else if(x<0){
			    		x=0;
			    	}
			    	if(y>=$spic[0].offsetHeight-$sf[0].offsetHeight-2){
			    		y=$spic[0].offsetHeight-$sf[0].offsetHeight-2
			    		
			    	}else if(y<0){
			    		y=0;
			    	}
//			    	console.log($spic[0].offsetHeight-$sf[0].offsetHeight-2);
			    	//小的放大镜的移动距离;
			    	$sf.css('left',x+'px');
			    	$sf.css('top',y+'px');
			    	
			    	//-号是让图片移动保持在Bf父元素的中间
			    	$bfimg.css('left',-$bili*x+'px');
			    	$bfimg.css('top',-$bili*y+'px');
			    });
			});
			//移除隐藏
			$spic.on('mouseout',function(){
				$sf.css('visibility','hidden');
				$bf.css('visibility','hidden');
			})
			//图片路径转移
			$oLi.on('click',function(){
				var $index=$(this).index();
//				//spicimg.src=this.getElementsByTagName('img')[0].src;
//				//bfimg.src=this.getElementsByTagName('img')[0].src;
//				$sfimg.attr("src","img/"+$index+".jpg");
//				$bfimg.attr("src","img/"+$index+".jpg");]
//              $sfimg.html($oLi.eq($index).html);
			});
			
			var num=6;
			var $oLiwidth=$oLi[0].offsetWidth;//一张图片的大小
			if(num>$oLi.length){//大于Li的长度隐藏
				$Right.css('color','#fff');
			}
			$Right.on('click',function(){//右边按钮
				if(num<$oLi.length){
					num++;	
				    if(num==$oLi.length){
					    $Right.css('color','#fff');
				    }
				    $Left.css('color',"#333");
			   }
				$oUl.css('left',-$oLiwidth*(num-6));
			})
			$Left.on('click',function(){//左边按钮
				if(num>6){
					num--;	
				    if(num==6){
					    $Left.css('color','#fff');
				    }
				    $Right.css('color','#333');
				    
			   }
				$oUl.css('left',-$oLiwidth*(num-6));

			});
});
})
