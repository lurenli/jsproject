$(document).ready(function(){  
		var $btns=$('#main .btn span');//下面的span
    	var $imgs=$('#scroll img');//轮播图片
//  	console.log($imgs);
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
    		$index++;//索引加加
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
    });