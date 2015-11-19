function json2url(json)
{
	var arr=[];
	for(var name in json)
	{
		arr.push(name+'='+json[name]);	
	}	
	return arr.join('&');
}
function jsonp(json)
{
	json = json ||{};
	if(!json.url)return;
	json.data=json.data ||{};
	json.cbName=json.cbName ||'cb';
	
	var fnName='jsonp'+Math.random();
	fnName=fnName.replace('.','');
	
	json.data[json.cbName]=fnName;
	
	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
	
	window[fnName]=function(data){
			json.success && json.success(data);
			oHead.removeChild(oS);
		};
}

function getData(value,fnCb)
{
	jsonp({
			'url':'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
			'data':{
					'wd':value,
				},
			'success':function(json){
					fnCb  && fnCb(json.s); 
				},
		});	
}