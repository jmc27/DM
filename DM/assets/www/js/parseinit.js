/*if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
	console.log("true parse initializing");
  	document.addEventListener("deviceready", onDeviceReady, false);
} else {
console.log("false");
  onDeviceReady(); //this is the browser
}*/
onDeviceReady();
//document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log("initializing parse");
	Parse.initialize("L77teeeXm18eO71DH5TPEicWQ8Njyear57tpEHVc", "FOHNzccjji3i7KNjlYtNXnjBKZjhAiXDVBH0SzAJ");
	console.log("completed initialization");
}