/**
*	Set Order By strive.
*	copyright by other.
**/
//t  当前时间
//b  初始值
//c  总距离
//d  总时间
//var cur=fx(t,b,c,d)
(function (global){
	var Tween={Linear:function(t,b,c,d){return c*t/d+b},Quad:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b}},Quart:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b}},Quint:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b}},Expo:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circ:{easeIn:function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOut:function(t,b,c,d){if(t<d/2){return Tween.Bounce.easeIn(t*2,0,c,d)*0.5+b}else{return Tween.Bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b}}}};
	
	//工具函数
	function move(obj, json, options)
	{
		options=options || {};
		var duration=options.duration || 1000;
		var easing=options.easing || Tween.Linear;
		
		// start+dis*n/count
		var start={};
		var dis={};
		for (var name in json)
		{
			start[name]=parseFloat(getStyle(obj, name));
			dis[name]=parseFloat(json[name])-start[name];
		}
		
		var count=Math.floor(duration/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			n++;
			options.step && options.step(n,count);
			for (var name in json)
			{
				var cur=easing(duration*n/count, start[name], dis[name], duration);
				
				if (name == 'opacity')
				{
					obj.style[name]=cur;
				}
				else
				{
					obj.style[name]=cur+'px';
				}
			}
			
			if (n == count)
			{
				clearInterval(obj.timer);
				options.complete && options.complete(obj);
			}
		}, 30);
	}

	function getStyle(obj, sName)
	{
		return (obj.currentStyle || getComputedStyle(obj, false))[sName];
	}

	function addEvent(elt,event,handler)
	{
		elt.addEventListener ? elt.addEventListener(event,handler,false) :	elt.attachEvent('on' + event,handler);
	}

	function removeEvent(elt,event,handler){
		elt.removeEventListener ? elt.removeEventListener(event,handler,false) : elt.detachEvent('on' + event,handler);
	}

	function getScrollTop(){
		return document.documentElement.scrollTop || document.body.scrollTop;
	}

	function d2a(d)
	{
		return d*180/Math.PI;	
	}

	function getPos(elt){
		var left = 0,
			top = 0;
		while(elt.offsetParent){
			left += elt.offsetLeft;
			top += elt.offsetTop;
			elt = elt.offsetParent;
		}
		return {left:left,top:top};
	}
	//工具函数结束
	
	//skill 进度条
	var skillList = document.getElementById('sk_list');
	var skListToTop = getPos(skillList).top;
	addEvent(global,'scroll',function fn(){
		var scrollTop = getScrollTop() + 400;
		if(scrollTop > skListToTop){
			progress(skillList);
			removeEvent(global,'scroll',fn);
		}
	});
	function progress(oUl)
	{
		var aB=oUl.getElementsByTagName('b');
		var aWidth = [0.9,0.85,0.8,0.7,0.6];
		var aI=oUl.getElementsByTagName('i');
		var aDiv=oUl.getElementsByTagName('div');
		var oDivW=aDiv[0].offsetWidth;
		
		for(var i = 0;i < aB.length;i++){
			(function (){
				var w = aWidth[i],
					progress = aI[i];
				move(aB[i],{'width':aWidth[i]*oDivW},{step:function (n,count){
					progress.innerHTML = Math.floor(n/count*w*100) + '%';
				}});
			})();
			
		}
	}
	//弹性菜单
	var elasticMove = (function(){
			var left=0;
			var iSpeed=0;
			var timer=null;
			return function (obj,iTarget)
			{
				clearInterval(timer);
				timer=setInterval(function(){
						iSpeed+=(iTarget-left)/5;
						iSpeed*=0.7;
						
						left+=iSpeed;
						obj.style.left=Math.round(left)+'px';
						if(Math.round(iSpeed)==0 && Math.round(left)==iTarget)
						{
							clearInterval(timer);	
						}
					},30);	
			}
	})();

	function nav(id)
	{
		var oUl=document.getElementById(id);
		var aLi=oUl.children;
		var oBox=aLi[aLi.length-1];
		var iNow=0;
		for(var i=0;i<aLi.length-1;i++)
		{
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
					elasticMove(oBox,this.offsetLeft);
				};	
			aLi[i].onmouseout=function(){
					elasticMove(oBox,iNow*aLi[0].offsetWidth);
				};
			aLi[i].onclick=function(){
					iNow=this.index;
				};
		}	
	}
	//返回顶部
	function backtop(id){
		var oBtn=document.getElementById('btn');
		var timer=null;
		var userScroll=false;
		
		addEvent(global,'scroll',function (){
			var scrollTop = getScrollTop();
			if(scrollTop >= document.documentElement.clientHeight){
				oBtn.style.display = 'block';
			}else{
				oBtn.style.display = 'none';
			}
			
			// 用户
			if (userScroll)
			{
				clearInterval(timer);
			}
			
			userScroll=true;
			
		});
		
		oBtn.onclick=function (){
			// start+dis*n/count
			var start=getScrollTop();
			var dis=0-start;
			var count=Math.floor(1000/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function (){
				n++;
				userScroll=false;
				
				var cur=start+dis*n/count;
				document.body.scrollTop=cur;
				document.documentElement.scrollTop=cur;
				
				if (n == count)
				{
					clearInterval(timer);
				}
			}, 30);
		
		};
	};
	//方块移入移出
	function lagou(id)
	{
		var oUl=document.getElementById(id);
		var aLi=oUl.getElementsByTagName('li');
		//var oSpan=document.getElementsByTagName('span')[0];
		for(var i=0;i<aLi.length;i++)
		{
			enter(aLi[i]);
			leave(aLi[i]);	
		}
		
		function enter(obj)
		{
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseenter=function(ev){
				var oEvent=ev || event;
				var n=getN(obj,oEvent);
				switch (n)
				{
					case 0:
						oSpan.style.left='262px';
						oSpan.style.top=0;
						break;
					case 1:
						oSpan.style.left=0;
						oSpan.style.top='262px';
						break;
					case 2:
						oSpan.style.left='-262px';
						oSpan.style.top=0;
						break;
					case 3:
						oSpan.style.left=0;
						oSpan.style.top='-262px';
						break;
				}
				move(oSpan,{'left':0,'top':0});
			};	
		}
		
		function leave(obj)
		{
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseleave=function(ev){
				var oEvent=ev || event;
				var n=getN(obj,oEvent);
				switch (n)
				{
					case 0:
						var left='262px';
						var top=0;
						break;
					case 1:
						var left=0;
						var top='262px'	
						break;
					case 2:
						var left='-262px';
						var top=0;	
						break;
					case 3:
						var left=0;
						var top='-262px'	
						break;
				}
				move(oSpan,{'left':left,'top':top});
			};
		}
	};
		
	function getN(obj,ev)
	{
		var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
		var y=getPos(obj).top+obj.offsetHeight/2-(ev.clientY + getScrollTop());
		return  Math.round((d2a(Math.atan2(y,x))+180)/90)%4;
	}

	//吸顶导航栏
	function suction(id1,id2)
	{
		var oDiv1=document.getElementById(id1);
		var oDiv2=document.getElementById(id2);
		var top=getPos(oDiv1).top;
		addEvent(window,'scroll',function(){
			var scrollTop=getScrollTop();
			
			if(top<scrollTop)
			{
				oDiv2.style.display = 'block';
				oDiv1.style.position = 'fixed';	
			}
			else
			{
				oDiv2.style.display = 'none';
				oDiv1.style.position = 'static';	
			}
		});	
	}

	lagou('ul1'); 
	nav('navbar_c');
	backtop('btn');
	suction('nav','nav1');
})(window);























