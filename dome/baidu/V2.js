function showList(data,id)
{
	var oUl=document.getElementById(id);
	oUl.innerHTML='';
	oUl.style.display='block';
	for(var i=0;i<data.length;i++)
	{
		var oLi=document.createElement('li');
		oLi.innerHTML=data[i];
		oUl.appendChild(oLi);	
	}	
}