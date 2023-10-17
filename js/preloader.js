function preloadImages(){
	var images = ["https://placeimg.com/1640/1480/any","https://placeimg.com/1640/1481/any","https://placeimg.com/1640/1482/any","https://placeimg.com/1640/1483/any"];
	var preloadedImages = [];

	for(i=0;i<images.length;i++){
		preloadedImages[i] = new Image();
		preloadedImages[i].src = images[i];
		console.log(preloadedImages[i].src)
		console.log(preloadedImages[i])
	}
}

preloadImages();