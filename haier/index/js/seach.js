function hehe(obj){
		var arr=obj.data;
//		console.log(arr[1].smartWord);
//		console.log(arr[1].resultCount);
		
		var html='';
		var oUL=$('#ss');
		if(Input.val()!=''){
			for(var i in arr){
				if(arr[i]!=undefined){
				 html+='<dd><a href="http://search.ehaier.com"><span>'+arr[i].smartWord+'</span><i>'+arr[i].resultCount+'</i></a></dd>';
			    }
			}
				oUL.html(html);
				oUL.show();
		}else{
				oUL.hide();
			    oUL.html('');
		}		

	}
	var Input=$('#search');
	Input.on('input',function(){
		var create='<script src="http://search.ehaier.com/suggestJson.html?q='+Input.val()+'&jsonpCallback=hehe" type="text/javascript" charset="utf-8"></script>';
	   $('body').append(create);
})
