(function () {
	var id = "livereload";
	
	var js, fjs = document.getElementsByTagName("script")[0];
	if (document.getElementById(id)){ return;}
	
	js = document.createElement("script"); 
	js.id = id;
	js.src = "//localhost:9091";
	fjs.parentNode.insertBefore(js, fjs);
})();