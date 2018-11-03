const urlParams = new URLSearchParams(window.location.search);
var imgUrl = urlParams.get('url');
var urlData = imgUrl.split('=');
var imgId = urlData[1];
const imgWidth = urlParams.get('width');
const imgHeight = urlParams.get('height');
			
if(imgId != null){

		var newWin = window.open("https://drive.google.com/thumbnail?id="+imgId+"&sz=w"+imgWidth+"-h"+imgHeight+"");
		// display message if browser is blocking popup window 	
		if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
		{ 
    		document.getElementById('msg').style.cssText = "display:block;";
		}
	}else{
		console.log("No id is passed.");
		alert("No Image Id Found !");
	}