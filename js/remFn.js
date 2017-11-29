function addEvent(elem,event,fn) {  
    if(elem.addEventListener){  
        elem.addEventListener(event,fn,false);  
    }else if (elem.attachEvent){  
        elem.attachEvent('on'+event,fn);  
    }else{  
        elem['on'+event]=fn;  
    }  
} 
function rem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth*40/750+'px';
}
rem();
addEvent(window,'resize',function(){
	rem();
})
