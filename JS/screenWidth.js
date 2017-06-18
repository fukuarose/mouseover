function client(){
	if(window.innerWidth!=null){
		return {
			width:window.innerWidth,
			height:window.innerHeight
		}
	}else if(document.compatMode==="CSS1Compat"){
		return{
			width:window.documentElement.width,
			height:window.documentElement.height
		}
	}
	
		return{
			width:window.body.clientWidth,
			height:window.body.clientHeight
		}

}
