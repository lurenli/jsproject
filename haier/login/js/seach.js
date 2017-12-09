function hehe(obj){   //arr数组
			var arr=obj.s;//取数组里的值
			var oDL=document.getElementById('ss');
			var html='';
			if(oInput.value!=''){
				for(var i=0;i<4;i++){
					html+='<li><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+arr[i]+'&oq=abc&rsv_pq=869ac56800003f90&rsv_t=3912JyxgemJAuKY6j6%2B74U1ELZ4ZIo8z3gx7L77eVYcrNz7Qkw0%2BuK0Gxns&rqlang=cn&rsv_enter=1&rsv_sug3=17&rsv_sug1=22&rsv_sug7=100&rsv_sug2=1&prefixsug=a&rsp=1&inputT=720107&rsv_sug4=720400">'+arr[i]+'</a> </li>'
				}
				oDL.innerHTML=html;
			}else{
				oDL.innerHTML='';
			}
		}    
		   var oInput=document.getElementById('search');
			oInput.oninput=function(){
				//<script> 标签用于定义客户端脚本，比如 JavaScript。
				//script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件。
				//必需的 type 属性规定脚本的 MIME 类型。
				//含有src属性的html标签
				//img图片
				//frame iframe框架集 
				//input type为image的提交按钮 
				//scirpt脚本 
				//style样式表 
				//只要可以从外部引入资源的一般都有src
				var create=document.createElement('script');
				//console.log(create);                                              
				create.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.value+"&cb=hehe";
			    document.body.appendChild(create)
			}