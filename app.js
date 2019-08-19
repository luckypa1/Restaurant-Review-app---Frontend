if("serviceWorker" in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js',{scope:'/'})
	.then(function(reg){
		console.log("Registered.",reg);

	}).catch(function(err){
		console.log("Registered.",err);
	})
}
