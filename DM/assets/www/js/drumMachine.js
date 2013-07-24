//Create a global variable of activeKit array that will represent the activekit
//Initialize the activekit to be from one to six
//Set a global kitNumber variable and set the initial value to 1
window.kitNumber=1;
window.mySound=new Array(9);
window.mediaTimer=null;
padIm=1;
    
// Call onDeviceReady when PhoneGap is loaded.
// At this point, the document has loaded but phonegap has not.
// When PhoneGap is loaded and talking with the native device,
// it will call the event `deviceready`. 

//drumpad
function loadSounds(kitnb)
{
	window.kitNumber = kitnb;
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/kick.wav";
	window.mySound[1] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/snare.wav";
	window.mySound[2] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/clap.wav";
	window.mySound[3] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/cc.wav";
	window.mySound[4] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/riffc.wav";
	window.mySound[5] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/riffa.wav";
	window.mySound[6] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/riffe.wav";
	window.mySound[7] = new Media(mySrc);
	mySrc = "/android_asset"+"/"+"www"+"/"+"drum/"+window.kitNumber+"/riffd4.wav";
	window.mySound[8] = new Media(mySrc);
}

$(document).ready(function playSound()
{
	$('.pad').on("touchstart",function()
	{
		i=$(this).attr("value");
		//$(this).fadeTo(0.0,0.8);
		//$(this).fadeTo("fast",1.0);
		window.mySound[i].play(); 
		padIm=i;
	})
})
