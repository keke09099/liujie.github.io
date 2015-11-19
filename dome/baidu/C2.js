window.onload=function(){
		var oT=document.getElementById('t1');
		var oBtn=document.getElementById('btn1');
		oT.onkeyup=function(){
				//M
				
				getData(oT.value,function(data){
						//V
						showList(data,'ul1');
					});
			};
	};