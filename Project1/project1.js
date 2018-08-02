$(function(){

    // getting the API data from zillow
$.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18fvjq3ltsb_6ttia&state=wa&city=seattle&childtype=neighborhood")
.done(function(response){
    console.log(response);
    myFunction(response);

})
.fail(function(error){

})


})
// function to find elements in the response and add to the HTML
// bad code but works lol
function myFunction(response) {
    xmlDoc = response;
    x = xmlDoc.getElementsByTagName("list");
    list = x[0];
    y = list.getElementsByTagName("region");
    for (i=0; i < 10; i++) {
    z = y[i];
    a = [z.getElementsByTagName("name"), z.getElementsByTagName("zindex"), z.getElementsByTagName("url"), z.getElementsByTagName("latitude"), z.getElementsByTagName("longitude")];
    var $infobox = $("#infobox");
    $infobox.append(a[0]);
    $infobox.append("<br>$");
    $infobox.append(a[1]);
    $infobox.append("<br>");
    $infobox.append(a[2]);
    $infobox.append("<br>");
    $infobox.append(a[3]);
    $infobox.append(", ");
    $infobox.append(a[4]);
    $infobox.append("<br><br>");
    }
    // check the console to see the list!
    console.log(y);
  }
   
// (function(){
//     var url = "http://www.zillow.com/webservice/GetRegionChildren.htm?";
// 	var apiKey = "X1-ZWz18fvjq3ltsb_6ttia"; // Replace "APIKEY" with your own API key;
//     var city = $('$city').val();

// 	$.get(url + 'zws-id=' + apiKey + '&state=tx&city=' + city + '&childtype=neighborhood' ).done(function(response) {
//         console.log(response);
//         var $infobox = $('#infobox');
//         $infobox.append("<p>" + response + "</p>");
        // updateUISuccess(response);
//     });
// });
	// }).fail(function(error) {
	// 	console.log(error);


	// 	//updateUIError();	
	// })
	// handle XHR success
// 	function updateUISuccess(response) {
// 		var condition = response.weather[0].main;
// 		var degC = response.main.temp - 273.15;
// 		var degCInt = Math.floor(degC);
// 		var degF = degC * 1.8 + 32;
// 		var degFInt = Math.floor(degF);
// 		var weatherBox = document.getElementById("text");
// 		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
// 		var $weatherBox = $('#weather');
// 		$weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
// 	}

// 	// handle XHR error
// 	function updateUIError() {
// //		var weatherBox = document.getElementById("weather");
// //		weatherBox.className = "hidden";
// 		var $weatherBox = $('#weather');
// 		$weatherBox.addClass('hidden');
// 	}


// });
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    //     async defer></script>