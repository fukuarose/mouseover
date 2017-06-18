function $(id){return document.getElementById(id);}
function show(obj){obj.style.display="block";}
function hide(obj){obj.style.display="none";}
function scroll(){
	
		if(window.pageYOffset!=null){
			return {
				left:window.pageXOffset,
				top:window.pageYOffset
			}
		}else if(document.compatMode=="CSS1Compat")//声明了的dtd
		//检测是不是怪异模式的浏览器————（就是没有声明<!DOCTYPE html>）
		{
			return {
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		return {
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	}
	window.onscroll=function(){
		console.log(scroll().top);
	}